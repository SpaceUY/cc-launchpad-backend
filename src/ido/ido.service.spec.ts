import { Test, TestingModule } from '@nestjs/testing';
import { IdoService } from './ido.service';

describe('IdoService', () => {
  let service: IdoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [IdoService],
    }).compile();

    service = module.get<IdoService>(IdoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
