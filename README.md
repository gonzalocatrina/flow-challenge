
## Description

Flow challenge

## Installation

```bash
$ npm install
```
## Before running the application

You should create a .env file with the next properties: 

```bash
#App config

PORT=3000

#Apis urls

IP_API_URL=http://ip-api.com/json/
OPEN_WEATHER_API_URL=https://api.openweathermap.org/data/2.5/weather?q=
OPEN_WEATHER_API_KEY=&appid=b09e27db2e345c84755d567a138dfba1
OPEN_WEATHER_5_DAYS_API_URL=https://api.openweathermap.org/data/2.5/forecast?q=

```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

