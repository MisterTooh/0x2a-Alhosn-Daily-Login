import { Body, Controller, Post, Get, Param, Req } from '@nestjs/common'
import { CreateStudentDto } from './dto/create-student-dto'
import { UpdateStudentDto } from './dto/update-student-to'
import { StudentService } from './student.service'

@Controller('student')
export class StudentController {
    constructor(private readonly studentService: StudentService) {}

    @Post('add')
    async addStudent(
        @Req() req: Request,
        @Body() addStudent: CreateStudentDto
    ) {
        return this.studentService.createStudent(addStudent.cardId, addStudent)
    }

    @Post('update')
    async updateStudent(
        @Body()
        @Param()
        cardId: string,
        updateStudent: UpdateStudentDto
    ) {}

    @Get('search')
    async findStudent(@Param() cardId: string) {
        console.log(cardId)
        return this.studentService.findOne(cardId)
    }
}
