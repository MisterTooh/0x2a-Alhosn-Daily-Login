import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator'

export class CreateDailyLoginDto {
    @IsString()
    cardId: string

    uuid: any

    @IsBoolean()
    @IsOptional()
    signIn: boolean

    @IsNumber()
    @IsOptional()
    signInDate: Date
}
