import { Injectable, Req } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './entity/student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student) private studentRepository: Repository<Student>,
  ) {}

  findOne(cardId: string): Promise<Student> {
    return;
  }

  editStudent(cardId: string, req: Request): Promise<Student> {
    return;
  }

  async remove(cardId: number | string): Promise<void> {
    await this.studentRepository.delete(cardId);
  }
}
