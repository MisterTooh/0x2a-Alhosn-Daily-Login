import {
    Body,
    Controller,
    Post,
    Get,
    Param,
    Req,
    ParseArrayPipe
} from '@nestjs/common'
import { CreateStudentDto } from './dto/create-student-dto'
import { UpdateStudentDto } from './dto/update-student-to'
import { Student } from './entities/student.entity'
import { StudentService } from './student.service'

@Controller('student')
export class StudentController {
    constructor(private readonly studentService: StudentService) {}

    @Post('add')
    async addStudent(
        @Req() req: Request,
        @Body() addStudent: CreateStudentDto
    ) {
        return { student: this.studentService.createStudent(addStudent) }
    }

    @Post('addArray')
    async addArray(
        @Req() req: Request,
        @Body(
            new ParseArrayPipe({
                items: CreateStudentDto
            })
        )
        addStudents: CreateStudentDto[]
    ) {
        for (const addStudent of addStudents) {
            const student = this.studentService.createStudent(addStudent)
        }
        return {}
    }

    @Post('update')
    async updateStudent(
        @Req() req: Request,
        @Body() updateStudent: UpdateStudentDto
    ) {
        return this.studentService.editStudent(
            updateStudent.cardId,
            updateStudent
        )
    }

    @Get('search')
    async findStudent(
        @Req() req: Request,
        @Body() findStudent: Student,
        @Param() cardId: string
    ) {
        return this.studentService.findOne(cardId)
    }
}
