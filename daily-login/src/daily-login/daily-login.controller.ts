import { Controller, Get, Post, Body, Param, Req } from '@nestjs/common'
import { DailyLoginService } from './daily-login.service'
import { CreateDailyLoginDto } from './dto/create-daily-login.dto'

@Controller('daily-login')
export class DailyLoginController {
    constructor(private readonly dailyLoginService: DailyLoginService) {}

    @Post('sign-in')
    createLogin(
        @Req() req: Request,
        @Body() createDailyLoginDto: CreateDailyLoginDto
    ) {
        return {
            dailyLogin:
                this.dailyLoginService.createDailyLogin(createDailyLoginDto)
        }
    }

    @Get('search')
    findAll() {
        return this.dailyLoginService.findAll()
    }

    @Get('cardId')
    findOne(@Param('cardId') cardId: string) {
        // return this.dailyLoginService.findOne(+id)
    }
}
