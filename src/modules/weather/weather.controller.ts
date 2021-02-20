import { Controller, Get, Ip, Param } from '@nestjs/common';
import { WeatherService } from './weather.service';

@Controller()
export class WeatherController {
  constructor(private readonly weatherService: WeatherService) {}

  @Get('location')
  async locations(@Ip() ip: string) {
    return this.weatherService.locations(ip);
  }

  @Get('current/:city?')
  async currentCity(@Ip() ip: string, @Param('city') city?: string) {
    return this.weatherService.currentCity(ip, city);
  }

  @Get('forecast/:city?')
  async forecast(@Ip() ip: string, @Param('city') city?: string) {
    return this.weatherService.forecast(ip, city);
  }
}
