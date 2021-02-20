import { HttpService } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { WeatherController } from './weather.controller';
import { WeatherService } from './weather.service';
import {
  ipApiResponse,
  weatherResponse,
  weather5DaysResponse,
} from './mocks/weather.mock';

describe('WeatherController', () => {
  let controller: WeatherController;
  let service: WeatherService;
  let httpService: HttpService;
  let configService: ConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WeatherController],
      providers: [
        WeatherService,
        { provide: HttpService, useValue: {} },
        { provide: ConfigService, useValue: {} },
      ],
    }).compile();

    controller = module.get<WeatherController>(WeatherController);
    service = module.get<WeatherService>(WeatherService);
    httpService = module.get<HttpService>(HttpService);
    configService = module.get<ConfigService>(ConfigService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
    expect(httpService).toBeDefined();
    expect(configService).toBeDefined();
  });

  it('locations', async () => {
    const result = [{ ipApiResponse }];
    jest.spyOn(service, 'locations').mockImplementation(async () => result);
    expect(await controller.locations('24.48.0.1')).toBe(result);
  });
  it('currentCity', async () => {
    const result = { weatherResponse };
    jest.spyOn(service, 'currentCity').mockImplementation(async () => result);
    expect(await controller.currentCity('24.48.0.1')).toBe(result);
  });
  it('forecast', async () => {
    const result = { weather5DaysResponse };
    jest.spyOn(service, 'forecast').mockImplementation(async () => result);
    expect(await controller.forecast('24.48.0.1')).toBe(result);
  });
});
