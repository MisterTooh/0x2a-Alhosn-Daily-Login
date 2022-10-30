import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Student } from './student/entities/student.entity'
import { StudentModule } from './student/student.module'
import { DailyLoginModule } from './daily-login/daily-login.module'
import { DailyLogin } from './daily-login/entities/daily-login.entity'

@Module({
    imports: [
        StudentModule,
        TypeOrmModule.forRoot({
            type: 'sqlite',
            database: 'db.sqlite3',
            entities: [Student, DailyLogin],
            autoLoadEntities: true,
            synchronize: true
        }),
        DailyLoginModule
    ],
    controllers: [],
    providers: []
})
export class AppModule {}
