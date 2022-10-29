import { Student } from 'src/student/entities/student.entity'
import { PrimaryColumn, Column, ManyToOne, Entity } from 'typeorm'

@Entity()
export class DailyLogin {
    @PrimaryColumn()
    @ManyToOne((cardId) => Student, (cardId) => cardId.cardId)
    cardId: string

    @Column()
    signIn: Boolean

    @Column()
    signInDate: Date
}
