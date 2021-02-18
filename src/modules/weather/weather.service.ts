import { BadRequestException, HttpService, Injectable, InternalServerErrorException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ConstantsApp } from 'src/common/constants.app';
import { isRegExp } from 'util';

@Injectable()
export class WeatherService {
    constructor( private readonly httpService:HttpService, private readonly configService: ConfigService){}

    async locations(ip:string){
        let information;
        let response;
        try{
         information = await this.httpService.get(this.configService.get<string>('IP_API_URL')+ip).toPromise();
        if(information.data.status === 'fail'){
            throw new BadRequestException();
        }
        console.log(information.data.city);
        response = await this.httpService.get(this.configService.get<string>('OPEN_WEATHER_API_URL')+information.data.city+this.configService.get<string>('OPEN_WEATHER_API_KEY')).toPromise();
        if(!response.data){
            throw new InternalServerErrorException();
        }
    }
        catch(error){
            console.error(error);
            if(error instanceof BadRequestException){
                throw new BadRequestException(ConstantsApp.INVALID_IP_ERROR);
            }
            if(error instanceof InternalServerErrorException){
                throw new InternalServerErrorException(ConstantsApp.COULDNT_RETRIEVE_WEATHER);
            }
        }
        return response.data;
    }

    async currentCity(){

    }

    async forecast(){

    }
}
