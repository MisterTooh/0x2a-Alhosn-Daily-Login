import { Body, Controller, Post, Get, Param, Req } from '@nestjs/common'
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

    @Post('update')
    async updateStudent(
        @Body()
        @Param()
        cardId: string,
        updateStudent: UpdateStudentDto
    ) {}

    @Get('search')
    async findStudent(
        @Req() req: Request,
        @Body() findStudent: Student,
        @Param() cardId: string
    ) {
        return this.studentService.findOne(findStudent.cardId)
    }
}
