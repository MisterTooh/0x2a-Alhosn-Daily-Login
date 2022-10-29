import { DailyLogin } from 'src/daily-login/entities/daily-login.entity'
import { Entity, Column, PrimaryColumn, OneToMany } from 'typeorm'

@Entity()
export class Student {
    @PrimaryColumn()
    // @OneToMany((cardId) => DailyLogin, (cardId) => cardId.cardId)
    cardId: string

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    loginName?: string

    @Column()
    UID: number

    @Column()
    eid?: number

    @Column()
    alhosnStatus?: boolean

    @Column()
    student: boolean
}
