import { Module } from '@nestjs/common'
import { DailyLoginService } from './daily-login.service'
import { DailyLoginController } from './daily-login.controller'

@Module({
    controllers: [DailyLoginController],
    providers: [DailyLoginService]
})
export class DailyLoginModule {}
