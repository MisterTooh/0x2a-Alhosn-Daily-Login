import {
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  Column,
} from 'typeorm';

@Entity()
export class DailyLogin {
  @PrimaryGeneratedColumn()
  studentId: string;

  @Column()
  attendance?: boolean;

  @UpdateDateColumn()
  date: any;
}
