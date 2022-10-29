import { Body, Controller, Post } from '@nestjs/common'
import { CreateStudentDto } from './dto/create-student-dto'

@Controller('student')
export class StudentController {
    @Post('/add')
    async createStudent(@Body() createStudentDto: CreateStudentDto) {}
}
