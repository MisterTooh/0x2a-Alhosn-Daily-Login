import { Module } from '@nestjs/common'
import { DailyLoginService } from './daily-login.service'
import { DailyLoginController } from './daily-login.controller'
import { DailyLogin } from './entities/daily-login.entity'
import { TypeOrmModule } from '@nestjs/typeorm'

@Module({
    imports: [TypeOrmModule.forFeature([DailyLogin])],
    controllers: [DailyLoginController],
    providers: [DailyLoginService],
    exports: [TypeOrmModule]
})
export class DailyLoginModule {}
