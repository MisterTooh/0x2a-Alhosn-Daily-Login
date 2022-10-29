import { IsBoolean, IsNumber, IsString } from 'class-validator'

export class CreateStudentDto {
    @IsString()
    cardId: string

    @IsString()
    firstName: string

    @IsString()
    lastName: string

    @IsString()
    loginName?: string

    @IsNumber()
    UID: number

    @IsNumber()
    eid?: number

    @IsBoolean()
    alhosnStatus?: boolean

    @IsBoolean()
    student: boolean
}
