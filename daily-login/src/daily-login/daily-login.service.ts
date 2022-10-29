import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DailyLogin } from './entity/login-entity';

@Injectable()
export class DailyLoginService {
  constructor(
    @InjectRepository(DailyLogin)
    private dailyLogin: Repository<DailyLogin>,
  ) {}

  findOne(cardId: number | string) {}
}
