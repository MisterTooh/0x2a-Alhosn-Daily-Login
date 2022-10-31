import {
    Body,
    Controller,
    Post,
    Get,
    Param,
    Req,
    ParseArrayPipe,
    HttpCode,
    Patch
} from '@nestjs/common'
import { CreateStudentDto } from './dto/create-student-dto'
import { UpdateStudentDto } from './dto/update-student-to'
import { Student } from './entities/student.entity'
import { StudentService } from './student.service'

@Controller('student')
export class StudentController {
    constructor(private readonly studentService: StudentService) {}

    @Post('add')
    async addStudent(@Body() addStudent: CreateStudentDto) {
        this.studentService.createStudent(addStudent)
    }

    @Post('addMany')
    async addMany(
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
    }

    @Patch('update')
    async updateStudent(
        @Req() req: Request,
        @Body() updateStudent: UpdateStudentDto
    ) {
        this.studentService.editStudent(updateStudent.cardId, updateStudent)
    }
    @Get('search')
    @HttpCode(200)
    async findStudent(
        @Req() req: Request,
        @Body() findStudent: Student,
        @Param() cardId: string
    ) {
        return await this.studentService.findOne(findStudent.cardId)
    }
}
