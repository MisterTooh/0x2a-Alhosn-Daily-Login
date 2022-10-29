import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DailyLogin } from './daily-login/entity/login-entity';
import { Student } from './student/entity/student.entity';
import { StudentModule } from './student/student.module';

@Module({
  imports: [
    StudentModule,
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'db.sqlite',
      entities: [Student, DailyLogin],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
