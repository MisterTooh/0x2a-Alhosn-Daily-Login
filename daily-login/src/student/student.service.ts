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

    private async findOrCreate(addStudent: CreateStudentDto, cardId: string) {
        const student = await this.studentRepository.findOneBy({ cardId })

        if (student) {
            return student
        }
        return this.studentRepository.create(addStudent)
    }

    async createStudent(cardId: string, addStudent: CreateStudentDto) {
        const student = this.findOrCreate(addStudent, addStudent.cardId)
    }

    findOne(@Param() cardId: string) {
        const student = this.studentRepository.findOneBy({ cardId })
        return { student }
    }

    editStudent(@Param() cardId: string, editStudent: UpdateStudentDto) {
        return
    }

    async remove(@Param() cardId: string): Promise<void> {
        await this.studentRepository.delete(cardId)
    }
}
