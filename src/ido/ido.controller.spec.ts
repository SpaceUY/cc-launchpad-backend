import { Test, TestingModule } from '@nestjs/testing';
import { IdoController } from './ido.controller';
import { IdoService } from './ido.service';

describe('IdoController', () => {
  let controller: IdoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IdoController],
      providers: [IdoService],
    }).compile();

    controller = module.get<IdoController>(IdoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
