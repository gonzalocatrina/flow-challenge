import { BadRequestException, HttpException, HttpService, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { response } from 'express';
import { ConstantsApp } from 'src/common/constants.app';

@Injectable()
export class WeatherService {
    constructor( private readonly httpService:HttpService, private readonly configService: ConfigService){}

    async locations(ip:string){
        try{
            const response = await this.httpService.get(this.configService.get<string>('IP_API_URL')+'24.48.0.1').toPromise();
           if(response.data.status === 'fail'){
               throw new BadRequestException();
           }
        }   catch(error){
            console.error(error);
            if(error instanceof BadRequestException){
                throw new BadRequestException(ConstantsApp.INVALID_IP_ERROR);
            }
        }
        return response;
    }

    async currentCity(ip:string, city?:string){
        try{
        
            if(!city){
         let responseIpApi = await this.httpService.get(this.configService.get<string>('IP_API_URL')+'24.48.0.1').toPromise();
        if(responseIpApi.data.status !== 'success'){
            throw new BadRequestException();
        }
        city = responseIpApi.data.city;
        }     
         let response = await this.httpService.get(this.configService.get<string>('OPEN_WEATHER_API_URL')+city+this.configService.get<string>('OPEN_WEATHER_API_KEY')).toPromise();
         console.log(response.data);
       /* if(response == 404){
            throw new BadRequestException();
        }*/
        if(!response){
            throw new InternalServerErrorException();
        }
        return response.data;
    }
        catch(error){
            console.error(error);
            if(error instanceof BadRequestException){
                throw new BadRequestException(ConstantsApp.INVALID_IP_ERROR);
            }
            if(error instanceof InternalServerErrorException){
                throw new InternalServerErrorException(ConstantsApp.COULDNT_RETRIEVE_WEATHER_ERROR);
            }
        }
    }

    async forecast(ip:string, city?:string){
        let responseWeather;
        try{
            
        if(!city){
         let responseIpApi = await this.httpService.get(this.configService.get<string>('IP_API_URL')+'24.48.0.1').toPromise();
        if(responseIpApi.data.status !== 'success'){
            throw new BadRequestException(ConstantsApp.INVALID_IP_ERROR);
        }
        city = responseIpApi.data.city;
        }     
        console.log(city);  
         let response = this.httpService.get(this.configService.get<string>('OPEN_WEATHER_5_DAYS_API_URL')+city+this.configService.get<string>('OPEN_WEATHER_API_KEY')).toPromise();
         responseWeather = await response.then( (data)=>{ responseWeather = data.data }).catch( (e) => { throw new NotFoundException(); });
         if(!responseWeather.data){
            throw new InternalServerErrorException();
        }
        if(responseWeather.data.cod === '404'){
            throw new NotFoundException();
            
        }
        return  await responseWeather;
    }
        catch(error){
            console.error(error);
            if(error instanceof BadRequestException){
                throw new BadRequestException(ConstantsApp.INVALID_IP_ERROR);
            }
            if(error instanceof InternalServerErrorException){
                throw new InternalServerErrorException(ConstantsApp.COULDNT_RETRIEVE_WEATHER_ERROR);
            }
            if(error instanceof NotFoundException)
            {
                throw new NotFoundException(ConstantsApp.CITY_NOT_FOUND_ERROR);
                
            }
        }
    }
    
}

