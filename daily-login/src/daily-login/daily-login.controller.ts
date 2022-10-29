import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DailyLoginService } from './daily-login.service';
import { CreateDailyLoginDto } from './dto/create-daily-login.dto';
import { UpdateDailyLoginDto } from './dto/update-daily-login.dto';

@Controller('daily-login')
export class DailyLoginController {
  constructor(private readonly dailyLoginService: DailyLoginService) {}

  @Post()
  create(@Body() createDailyLoginDto: CreateDailyLoginDto) {
    return this.dailyLoginService.create(createDailyLoginDto);
  }

  @Get()
  findAll() {
    return this.dailyLoginService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dailyLoginService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDailyLoginDto: UpdateDailyLoginDto) {
    return this.dailyLoginService.update(+id, updateDailyLoginDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dailyLoginService.remove(+id);
  }
}
