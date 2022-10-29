import { Injectable } from '@nestjs/common';
import { CreateDailyLoginDto } from './dto/create-daily-login.dto';
import { UpdateDailyLoginDto } from './dto/update-daily-login.dto';

@Injectable()
export class DailyLoginService {
  create(createDailyLoginDto: CreateDailyLoginDto) {
    return 'This action adds a new dailyLogin';
  }

  findAll() {
    return `This action returns all dailyLogin`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dailyLogin`;
  }

  update(id: number, updateDailyLoginDto: UpdateDailyLoginDto) {
    return `This action updates a #${id} dailyLogin`;
  }

  remove(id: number) {
    return `This action removes a #${id} dailyLogin`;
  }
}
