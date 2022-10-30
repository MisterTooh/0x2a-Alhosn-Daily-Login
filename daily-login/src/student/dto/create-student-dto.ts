import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator'

export class CreateStudentDto {
    @IsString()
    cardId: string

    @IsString()
    fullName: string

    @IsString()
    loginName: string

    @IsNumber()
    UID: number

    @IsBoolean()
    @IsOptional()
    alhosnStatus?: boolean

    @IsBoolean()
    status: boolean

    @IsString()
    @IsOptional()
    closeReason?: string
}
