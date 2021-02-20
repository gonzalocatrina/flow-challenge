import { BadRequestException, HttpModule, HttpService, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Test, TestingModule } from '@nestjs/testing';
import { WeatherService } from './weather.service';
import { AxiosResponse } from 'axios'
import { of } from 'rxjs';
import { ConstantsApp } from '@src/common/constants.app';
import { ipApiFailResponse, ipApiResponse, weatherNotFound, weatherResponse } from './mocks/weather.mock';

const mockedUrl = () => ({get:() => undefined})

describe('WeatherService', () => {
  let service: WeatherService;
  let httpService : HttpService;
  let configService : ConfigService;


  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports:[HttpModule],
      providers: [WeatherService, { provide: ConfigService, useFactory: mockedUrl}],
    }).compile();

    service = module.get<WeatherService>(WeatherService);
    httpService = module.get<HttpService>(HttpService);
    configService = module.get<ConfigService>(ConfigService);
    //jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(httpService).toBeDefined();
    expect(configService).toBeDefined();
  });

  describe('locations', ()=> {

      it('Should success from valid ip',async  ()=> {
        const response: AxiosResponse<any> = {
          data: ipApiResponse,
          headers: {},
          config: { url: 'http://localhost:3000/mockUrl' },
          status: 200,
          statusText: 'OK',
        };
        jest.spyOn(httpService, 'get').mockImplementation(() => of(response));
        expect( await service.locations('24.48.0.1')).toEqual(ipApiResponse);
      });

      it('Should fail from invalid ip or ::1 ',async  ()=> {
        const response: AxiosResponse<any> = {
          data: ipApiFailResponse,
          headers: {},
          config: { url: 'http://localhost:3000/mockUrl' },
          status: 200,
          statusText: 'OK',
        };
        jest.spyOn(httpService, 'get').mockImplementation(() => of(response));
        try {
           await service.locations('::1')
        } catch (error) {
          expect(error).toBeInstanceOf(BadRequestException);
          expect(error).toHaveProperty('message', ConstantsApp.INVALID_IP_ERROR);
        }
      });
      
  });

  describe('currentCity',()=>{

    it('Should success from valid ip',async  ()=> {
      
      const responseIpApi: AxiosResponse<any> = {
        data: ipApiResponse,
        headers: {},
        config: { url: 'http://localhost:3000/mockUrl' },
        status: 200,
        statusText: 'OK',
      };
      jest.spyOn(httpService, 'get').mockImplementationOnce(() => of(responseIpApi));

      const responseWeather: AxiosResponse<any> = {
        data: weatherResponse,
        headers: {},
        config: { url: 'http://localhost:3000/mockUrl' },
        status: 200,
        statusText: 'OK',
      };
      jest.spyOn(httpService, 'get').mockImplementationOnce(() => of(responseWeather));

      expect( await service.currentCity('24.48.0.1')).toEqual(responseWeather.data);
    });

    it('Should success from valid city',async  ()=> {
      
      const responseWeather: AxiosResponse<any> = {
        data: weatherResponse,
        headers: {},
        config: { url: 'http://localhost:3000/mockUrl' },
        status: 200,
        statusText: 'OK',
      };
      jest.spyOn(httpService, 'get').mockImplementation(() => of(responseWeather));
      
      expect( await service.currentCity('0:0:0:0','Montreal')).toEqual(responseWeather.data);
    });

    it('Should give not found error', async () =>{
      jest.spyOn(httpService, 'get').mockImplementationOnce(() =>{ throw new NotFoundException(); });
      try {
        await service.currentCity('0:0:0:0','Montreal');
     } catch (error) {
       expect(error).toBeInstanceOf(NotFoundException);
       expect(error).toHaveProperty('message', ConstantsApp.CITY_NOT_FOUND_ERROR);
     }
    });

    it('Should give not internal server error', async () =>{
      jest.spyOn(httpService, 'get').mockImplementationOnce(() =>{ throw new InternalServerErrorException(); });
      try {
        await service.currentCity('0:0:0:0','Montreal');
     } catch (error) {
       expect(error).toBeInstanceOf(InternalServerErrorException);
       expect(error).toHaveProperty('message', ConstantsApp.COULDNT_RETRIEVE_WEATHER_ERROR);
     }
    });

    it('Should fail from invalid ip or ::1 without city ',async  ()=> {
      const response: AxiosResponse<any> = {
        data: ipApiFailResponse,
                headers: {},
        config: { url: 'http://localhost:3000/mockUrl' },
        status: 200,
        statusText: 'OK',
      };
      jest.spyOn(httpService, 'get').mockImplementation(() => of(response));
      try {
         await service.currentCity('::1')
      } catch (error) {
        expect(error).toBeInstanceOf(BadRequestException);
        expect(error).toHaveProperty('message', ConstantsApp.INVALID_IP_ERROR);
      }
    });
  });

  describe('forecast',()=>{

    it('Should success from valid ip',async  ()=> {
      
      const responseIpApi: AxiosResponse<any> = {
        data: ipApiResponse,
        headers: {},
        config: { url: 'http://localhost:3000/mockUrl' },
        status: 200,
        statusText: 'OK',
      };
      jest.spyOn(httpService, 'get').mockImplementationOnce(() => of(responseIpApi));

      const responseWeather: AxiosResponse<any> = {
        data: weatherResponse,
        headers: {},
        config: { url: 'http://localhost:3000/mockUrl' },
        status: 200,
        statusText: 'OK',
      };
      jest.spyOn(httpService, 'get').mockImplementationOnce(() => of(responseWeather));

      expect( await service.forecast('24.48.0.1')).toEqual(responseWeather.data);
    });

    it('Should success from valid city',async  ()=> {
      
      const responseWeather: AxiosResponse<any> = {
        data: weatherResponse,
        headers: {},
        config: { url: 'http://localhost:3000/mockUrl' },
        status: 200,
        statusText: 'OK',
      };
      jest.spyOn(httpService, 'get').mockImplementation(() => of(responseWeather));
      expect( await service.forecast('','Montreal')).toEqual(responseWeather.data);
    });

    it('Should give not found error', async () =>{
      jest.spyOn(httpService, 'get').mockImplementationOnce(() =>{ throw new NotFoundException(); });
      try {
        await service.forecast('0:0:0:0','Montreal');
     } catch (error) {
       expect(error).toBeInstanceOf(NotFoundException);
       expect(error).toHaveProperty('message', ConstantsApp.CITY_NOT_FOUND_ERROR);
     }
    });

    it('Should give not internal server error', async () =>{
      jest.spyOn(httpService, 'get').mockImplementationOnce(() =>{ throw new InternalServerErrorException(); });
      try {
        await service.forecast('0:0:0:0','Montreal');
     } catch (error) {
       expect(error).toBeInstanceOf(InternalServerErrorException);
       expect(error).toHaveProperty('message', ConstantsApp.COULDNT_RETRIEVE_WEATHER_ERROR);
     }
    });
    
    it('Should fail from invalid ip or ::1 without city ',async  ()=> {
      const response: AxiosResponse<any> = {
        data: ipApiFailResponse,
        headers: {},
        config: { url: 'http://localhost:3000/mockUrl' },
        status: 200,
        statusText: 'OK',
      };
      jest.spyOn(httpService, 'get').mockImplementation(() => of(response));
      try {
         await service.forecast('::1')
      } catch (error) {
        expect(error).toBeInstanceOf(BadRequestException);
        expect(error).toHaveProperty('message', ConstantsApp.INVALID_IP_ERROR);
      }
    });
  });


});
