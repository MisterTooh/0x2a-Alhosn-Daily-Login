import { BadRequestException, Injectable, Param } from '@nestjs/common'
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

    private async findAndUpdateStudent(
        cardId: string,
        updateStudent: UpdateStudentDto
    ) {}

    private async findOrCreate(studentDto: CreateStudentDto, cardId: string) {
        const student = await this.studentRepository.findOneBy({ cardId })
        if (student) {
            return { student }
        } else
            return await { studentDto: this.studentRepository.save(studentDto) }
    }

    createStudent(studentDto: CreateStudentDto) {
        return {
            student: this.findOrCreate(studentDto, studentDto.cardId)
        }
    }

    async findOne(@Param() cardId: string) {
        const student = await this.studentRepository.findOneBy({ cardId })
        return { student }
    }

    editStudent(cardId: string, editStudent: UpdateStudentDto) {
        return this.findAndUpdateStudent(cardId, editStudent)
    }

    async remove(@Param() cardId: string): Promise<void> {
        await this.studentRepository.delete(cardId)
    }
}
