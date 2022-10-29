import { Student } from 'src/student/entity/student.entity'
import {
    Entity,
    UpdateDateColumn,
    Column,
    OneToOne,
    PrimaryColumn
} from 'typeorm'

@Entity()
export class DailyLogin {
    @PrimaryColumn()
    @OneToOne((cardId) => Student, (cardId) => cardId.cardId)
    cardId: string

    @Column()
    attendance?: boolean

    @UpdateDateColumn()
    date: any
}
