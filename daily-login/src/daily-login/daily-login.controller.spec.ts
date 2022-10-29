import { Test, TestingModule } from '@nestjs/testing';
import { DailyLoginController } from './daily-login.controller';
import { DailyLoginService } from './daily-login.service';

describe('DailyLoginController', () => {
  let controller: DailyLoginController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DailyLoginController],
      providers: [DailyLoginService],
    }).compile();

    controller = module.get<DailyLoginController>(DailyLoginController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
