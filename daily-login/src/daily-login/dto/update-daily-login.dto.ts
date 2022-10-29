import { PartialType } from '@nestjs/mapped-types';
import { CreateDailyLoginDto } from './create-daily-login.dto';

export class UpdateDailyLoginDto extends PartialType(CreateDailyLoginDto) {}
