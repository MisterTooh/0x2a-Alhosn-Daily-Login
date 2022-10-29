import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateStudentDto } from './dto/create-student-dto'
import { Student } from './entity/student.entity'

@Injectable()
export class StudentService {
    constructor(
        @InjectRepository(Student)
        private studentRepository: Repository<Student>
    ) {}

    async createMany(createStudent: CreateStudentDto) {
        this.studentRepository.create(createStudent)
    }

    findOne(cardId: string): Promise<Student> {
        return this.studentRepository.findOneBy({ cardId })
    }

    editStudent(cardId: string, req: Request): Promise<Student> {
        return
    }

    async remove(cardId: string): Promise<void> {
        await this.studentRepository.delete(cardId)
    }
}
