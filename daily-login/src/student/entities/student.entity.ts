import { DailyLogin } from 'src/daily-login/entities/daily-login.entity'
import { Entity, Column, PrimaryColumn, OneToOne } from 'typeorm'

@Entity()
export class Student {
    @PrimaryColumn()
    @OneToOne((cardId) => DailyLogin, (cardId) => cardId.cardId)
    cardId: string

    @Column()
    fullName: string

    @Column()
    loginName: string

    @Column()
    UID: number

    @Column()
    alhosnStatus?: boolean

    @Column()
    status: boolean

    @Column()
    closeReason: string
}
