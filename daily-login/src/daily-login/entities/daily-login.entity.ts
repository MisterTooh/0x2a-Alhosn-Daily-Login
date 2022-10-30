import { Student } from 'src/student/entities/student.entity'
import { PrimaryColumn, Column, OneToOne, Entity } from 'typeorm'

@Entity()
export class DailyLogin {
    @PrimaryColumn()
    @OneToOne((cardId) => Student, (cardId) => cardId.cardId)
    cardId: string

    @Column()
    signIn: boolean

    @Column()
    signInDate: Date
}
