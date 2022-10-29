import { Entity, Column, PrimaryColumn } from 'typeorm'

@Entity()
export class Student {
    @PrimaryColumn()
    cardId: string

    @Column()
    name: string

    @Column()
    loginName?: string

    @Column()
    UID: number

    @Column()
    eid?: number

    @Column()
    alhosnStatus?: string

    @Column()
    student: boolean
}
