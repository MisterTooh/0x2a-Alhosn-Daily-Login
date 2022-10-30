import { Student } from 'src/student/entities/student.entity'
import { PrimaryColumn, Column, OneToOne, Entity, Generated } from 'typeorm'

@Entity()
export class DailyLogin {
    // @PrimaryColumn()
    // @Generated('uuid')
    // uuid: any

    @PrimaryColumn()
    @OneToOne((cardId) => Student, (cardId) => cardId.cardId)
    cardId: string

    @Column()
    signIn: boolean

    @Column()
    signInDate: Date
}
