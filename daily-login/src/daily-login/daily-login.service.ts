import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateDailyLoginDto } from './dto/create-daily-login.dto'
import { DailyLogin } from './entities/daily-login.entity'

@Injectable()
export class DailyLoginService {
    constructor(
        @InjectRepository(DailyLogin)
        private dailyLoginRepository: Repository<DailyLogin>
    ) {}

    async createDailyLogin(dailyLoginDto: CreateDailyLoginDto) {
        const dateToday = new Date()
        dailyLoginDto.signIn = true
        dailyLoginDto.signInDate = dateToday
        console.log(dateToday)
        return await {
            dailyLogin: this.dailyLoginRepository.save(dailyLoginDto)
        }
    }

    findAll() {
        return
    }

    findOne(id: number) {
        // return `This action returns a #${id} dailyLogin`
    }
}
