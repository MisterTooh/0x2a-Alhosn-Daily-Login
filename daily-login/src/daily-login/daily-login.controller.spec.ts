import { Test, TestingModule } from '@nestjs/testing';
import { DailyLoginController } from './daily-login.controller';

describe('DailyLoginController', () => {
  let controller: DailyLoginController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DailyLoginController],
    }).compile();

    controller = module.get<DailyLoginController>(DailyLoginController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
