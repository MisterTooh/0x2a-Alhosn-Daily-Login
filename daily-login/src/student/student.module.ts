import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { DailyLoginController } from 'src/daily-login/daily-login.controller'
import { DailyLoginService } from 'src/daily-login/daily-login.service'
import { DailyLogin } from 'src/daily-login/entity/login-entity'
import { Student } from './entity/student.entity'
import { StudentController } from './student.controller'
import { StudentService } from './student.service'

@Module({
    imports: [TypeOrmModule.forFeature([Student, DailyLogin])],
    controllers: [StudentController, DailyLoginController],
    providers: [StudentService, DailyLoginService],
    exports: [TypeOrmModule]
})
export class StudentModule {}
