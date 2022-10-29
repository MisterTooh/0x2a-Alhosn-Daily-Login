import { IsBoolean, IsDate, IsString } from 'class-validator'

export class CreateDailyLoginDto {
    @IsString()
    cardId: string

    @IsBoolean()
    signIn: Boolean

    @IsDate()
    signInDate: Date
}
