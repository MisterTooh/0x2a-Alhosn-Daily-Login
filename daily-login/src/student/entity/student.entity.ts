import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  cardId: string;

  @Column()
  name: string;

  @Column()
  loginName?: string;

  @Column()
  UID: number;

  @Column()
  eid?: number;

  @Column()
  alhosnStatus?: string;

  @Column()
  student: boolean;
}
