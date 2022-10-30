import { Student } from 'src/student/entities/student.entity'
import { PrimaryColumn, Column, OneToOne, Entity, Generated } from 'typeorm'

@Entity()
export class DailyLogin {
    @PrimaryColumn()
    @Generated('uuid')
    uuid: any

    @Column()
    @OneToOne((cardId) => Student, (cardId) => cardId.cardId)
    cardId: string

    @Column()
    signIn: boolean

    @Column()
    signInDate: Date
}
