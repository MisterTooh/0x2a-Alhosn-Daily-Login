import { Test, TestingModule } from '@nestjs/testing'
import { DailyLoginService } from './daily-login.service'

describe('DailyLoginService', () => {
    let service: DailyLoginService

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [DailyLoginService]
        }).compile()

        service = module.get<DailyLoginService>(DailyLoginService)
    })

    it('should be defined', () => {
        expect(service).toBeDefined()
    })
})
