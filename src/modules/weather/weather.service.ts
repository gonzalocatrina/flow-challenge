import {
  BadRequestException,
  HttpService,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ConstantsApp } from '@src/common/constants.app';

@Injectable()
export class WeatherService {
  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {}

  async locations(ip: string) {
    let response;
    try {
      response = await this.getIpApiLocationInformation(ip);
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw new BadRequestException(ConstantsApp.INVALID_IP_ERROR);
      }
    }
    return response;
  }

  async currentCity(ip: string, city?: string) {
    try {
      if (!city) {
        let responseIpApi = await this.getIpApiLocationInformation(ip);
        city = responseIpApi.city;
      }
      let response = await this.getWeatherInformation(city, false);
      if (!response) {
        throw new InternalServerErrorException();
      }
      return response;
    } catch (error) {
      console.error(error);
      if (error instanceof BadRequestException) {
        throw new BadRequestException(ConstantsApp.INVALID_IP_ERROR);
      }
      if (error instanceof InternalServerErrorException) {
        throw new InternalServerErrorException(
          ConstantsApp.COULDNT_RETRIEVE_WEATHER_ERROR,
        );
      }
      if (error instanceof NotFoundException) {
        throw new NotFoundException(ConstantsApp.CITY_NOT_FOUND_ERROR);
      }
    }
  }

  async forecast(ip: string, city?: string) {
    try {
      if (!city) {
        let responseIpApi = await this.getIpApiLocationInformation(ip);
        city = responseIpApi.city;
      }
      let response = await this.getWeatherInformation(city, true);
      if (!response) {
        throw new InternalServerErrorException();
      }
      return response;
    } catch (error) {
      console.error(error);
      if (error instanceof BadRequestException) {
        throw new BadRequestException(ConstantsApp.INVALID_IP_ERROR);
      }
      if (error instanceof InternalServerErrorException) {
        throw new InternalServerErrorException(
          ConstantsApp.COULDNT_RETRIEVE_WEATHER_ERROR,
        );
      }
      if (error instanceof NotFoundException) {
        throw new NotFoundException(ConstantsApp.CITY_NOT_FOUND_ERROR);
      }
    }
  }

  private async getIpApiLocationInformation(ip: string) {
    const response = await this.httpService
      .get(this.configService.get<string>('IP_API_URL') + ip)
      .toPromise();
    if (response.data.status !== 'success') {
      throw new BadRequestException();
    }
    return response.data;
  }

  private async getWeatherInformation(city: string, forecast: boolean) {
    let response;
    if (forecast) {
      response = await this.httpService
        .get(
          this.configService.get<string>('OPEN_WEATHER_5_DAYS_API_URL') +
            city +
            this.configService.get<string>('OPEN_WEATHER_API_KEY'),
        )
        .toPromise()
        .catch((e) => {
          throw new NotFoundException();
        });
    } else {
      response = await this.httpService
        .get(
          this.configService.get<string>('OPEN_WEATHER_API_URL') +
            city +
            this.configService.get<string>('OPEN_WEATHER_API_KEY'),
        )
        .toPromise()
        .catch((e) => {
          throw new NotFoundException();
        });
    }
    return response.data;
  }
}
