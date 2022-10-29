import { Injectable, Param } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateStudentDto } from './dto/create-student-dto'
import { UpdateStudentDto } from './dto/update-student-to'
import { Student } from './entities/student.entity'

@Injectable()
export class StudentService {
    constructor(
        @InjectRepository(Student)
        private studentRepository: Repository<Student>
    ) {}

    private async findOrCreate(studentDto: CreateStudentDto, cardId: string) {
        const student = await this.studentRepository.findOneBy({ cardId })
        if (student) {
            return 'Error: Already Exists'
        } else
            return await { studentDto: this.studentRepository.save(studentDto) }
    }

    async createStudent(req: Request, studentDto: CreateStudentDto) {
        return {
            student: await this.findOrCreate(studentDto, studentDto.cardId)
        }
    }

    async findOne(@Param() cardId: string) {
        const student = await this.studentRepository.findOneBy({ cardId })
        return { student }
    }

    editStudent(@Param() cardId: string, editStudent: UpdateStudentDto) {
        return
    }

    async remove(@Param() cardId: string): Promise<void> {
        await this.studentRepository.delete(cardId)
    }
}
