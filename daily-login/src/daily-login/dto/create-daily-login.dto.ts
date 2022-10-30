import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator'

export class CreateDailyLoginDto {
    uuid: any

    @IsString()
    cardId: string

    @IsBoolean()
    @IsOptional()
    signIn: boolean

    @IsNumber()
    @IsOptional()
    signInDate: Date
}
