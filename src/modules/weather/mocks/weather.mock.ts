export const ipApiResponse = {
  query: '24.48.0.1',
  status: 'success',
  country: 'Canada',
  countryCode: 'CA',
  region: 'QC',
  regionName: 'Quebec',
  city: 'Montreal',
  zip: 'H1S',
  lat: 45.5808,
  lon: -73.5825,
  timezone: 'America/Toronto',
  isp: 'Le Groupe Videotron Ltee',
  org: 'Videotron Ltee',
  as: 'AS5769 Videotron Telecom Ltee',
};

export const ipApiFailResponse = {
  query: '::1',
  message: 'reserved range',
  status: 'fail',
};

export const weatherResponse = {
  coord: {
    lon: -73.5878,
    lat: 45.5088,
  },
  weather: [
    {
      id: 804,
      main: 'Clouds',
      description: 'overcast clouds',
      icon: '04d',
    },
  ],
  base: 'stations',
  main: {
    temp: 266.12,
    feels_like: 261.98,
    temp_min: 264.26,
    temp_max: 268.15,
    pressure: 1017,
    humidity: 79,
  },
  visibility: 5036,
  wind: {
    speed: 1.54,
    deg: 330,
  },
  clouds: {
    all: 86,
  },
  dt: 1613836279,
  sys: {
    type: 1,
    id: 498,
    country: 'CA',
    sunrise: 1613821678,
    sunset: 1613860108,
  },
  timezone: -18000,
  id: 6077243,
  name: 'Montreal',
  cod: 200,
};

export const weather5DaysResponse = {
  cod: '200',
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1613854800,
      main: {
        temp: 269.16,
        feels_like: 264.4,
        temp_min: 268.86,
        temp_max: 269.16,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 1005,
        humidity: 78,
        temp_kf: 0.3,
      },
      weather: [
        {
          id: 600,
          main: 'Snow',
          description: 'light snow',
          icon: '13d',
        },
      ],
      clouds: {
        all: 95,
      },
      wind: {
        speed: 2.76,
        deg: 282,
      },
      visibility: 796,
      pop: 0.43,
      snow: {
        '3h': 0.37,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-02-20 21:00:00',
    },
    {
      dt: 1613865600,
      main: {
        temp: 266.99,
        feels_like: 262.69,
        temp_min: 266.31,
        temp_max: 266.99,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 1007,
        humidity: 90,
        temp_kf: 0.68,
      },
      weather: [
        {
          id: 600,
          main: 'Snow',
          description: 'light snow',
          icon: '13n',
        },
      ],
      clouds: {
        all: 98,
      },
      wind: {
        speed: 2.06,
        deg: 300,
      },
      visibility: 10000,
      pop: 0.22,
      snow: {
        '3h': 0.18,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-02-21 00:00:00',
    },
    {
      dt: 1613876400,
      main: {
        temp: 263.76,
        feels_like: 258.73,
        temp_min: 263.37,
        temp_max: 263.76,
        pressure: 1024,
        sea_level: 1024,
        grnd_level: 1010,
        humidity: 93,
        temp_kf: 0.39,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 97,
      },
      wind: {
        speed: 2.78,
        deg: 318,
      },
      visibility: 10000,
      pop: 0.06,
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-02-21 03:00:00',
    },
    {
      dt: 1613887200,
      main: {
        temp: 260.09,
        feels_like: 255.07,
        temp_min: 260.01,
        temp_max: 260.09,
        pressure: 1026,
        sea_level: 1026,
        grnd_level: 1012,
        humidity: 94,
        temp_kf: 0.08,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 65,
      },
      wind: {
        speed: 2.45,
        deg: 307,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-02-21 06:00:00',
    },
    {
      dt: 1613898000,
      main: {
        temp: 258.39,
        feels_like: 253.62,
        temp_min: 258.39,
        temp_max: 258.39,
        pressure: 1029,
        sea_level: 1029,
        grnd_level: 1014,
        humidity: 93,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      clouds: {
        all: 1,
      },
      wind: {
        speed: 1.96,
        deg: 268,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-02-21 09:00:00',
    },
    {
      dt: 1613908800,
      main: {
        temp: 257.14,
        feels_like: 252.14,
        temp_min: 257.14,
        temp_max: 257.14,
        pressure: 1031,
        sea_level: 1031,
        grnd_level: 1017,
        humidity: 93,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      clouds: {
        all: 1,
      },
      wind: {
        speed: 2.2,
        deg: 249,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-02-21 12:00:00',
    },
    {
      dt: 1613919600,
      main: {
        temp: 262.87,
        feels_like: 257.68,
        temp_min: 262.87,
        temp_max: 262.87,
        pressure: 1032,
        sea_level: 1032,
        grnd_level: 1018,
        humidity: 96,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      clouds: {
        all: 0,
      },
      wind: {
        speed: 2.96,
        deg: 247,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-02-21 15:00:00',
    },
    {
      dt: 1613930400,
      main: {
        temp: 266.6,
        feels_like: 261.36,
        temp_min: 266.6,
        temp_max: 266.6,
        pressure: 1031,
        sea_level: 1031,
        grnd_level: 1017,
        humidity: 97,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01d',
        },
      ],
      clouds: {
        all: 9,
      },
      wind: {
        speed: 3.48,
        deg: 236,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-02-21 18:00:00',
    },
    {
      dt: 1613941200,
      main: {
        temp: 268.05,
        feels_like: 263.17,
        temp_min: 268.05,
        temp_max: 268.05,
        pressure: 1030,
        sea_level: 1030,
        grnd_level: 1016,
        humidity: 97,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d',
        },
      ],
      clouds: {
        all: 29,
      },
      wind: {
        speed: 3.17,
        deg: 234,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-02-21 21:00:00',
    },
    {
      dt: 1613952000,
      main: {
        temp: 263.15,
        feels_like: 258.65,
        temp_min: 263.15,
        temp_max: 263.15,
        pressure: 1030,
        sea_level: 1030,
        grnd_level: 1016,
        humidity: 97,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03n',
        },
      ],
      clouds: {
        all: 28,
      },
      wind: {
        speed: 2.02,
        deg: 181,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-02-22 00:00:00',
    },
    {
      dt: 1613962800,
      main: {
        temp: 262.63,
        feels_like: 257.81,
        temp_min: 262.63,
        temp_max: 262.63,
        pressure: 1028,
        sea_level: 1028,
        grnd_level: 1014,
        humidity: 97,
        temp_kf: 0,
      },
      weather: [
        {
          id: 800,
          main: 'Clear',
          description: 'clear sky',
          icon: '01n',
        },
      ],
      clouds: {
        all: 1,
      },
      wind: {
        speed: 2.42,
        deg: 191,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-02-22 03:00:00',
    },
    {
      dt: 1613973600,
      main: {
        temp: 262.48,
        feels_like: 257.98,
        temp_min: 262.48,
        temp_max: 262.48,
        pressure: 1025,
        sea_level: 1025,
        grnd_level: 1011,
        humidity: 96,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03n',
        },
      ],
      clouds: {
        all: 43,
      },
      wind: {
        speed: 1.94,
        deg: 150,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-02-22 06:00:00',
    },
    {
      dt: 1613984400,
      main: {
        temp: 264.71,
        feels_like: 259.54,
        temp_min: 264.71,
        temp_max: 264.71,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 1007,
        humidity: 97,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.15,
        deg: 172,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-02-22 09:00:00',
    },
    {
      dt: 1613995200,
      main: {
        temp: 267.05,
        feels_like: 260.59,
        temp_min: 267.05,
        temp_max: 267.05,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 1002,
        humidity: 99,
        temp_kf: 0,
      },
      weather: [
        {
          id: 601,
          main: 'Snow',
          description: 'snow',
          icon: '13d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 5.32,
        deg: 162,
      },
      visibility: 128,
      pop: 0.97,
      snow: {
        '3h': 2.3,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-02-22 12:00:00',
    },
    {
      dt: 1614006000,
      main: {
        temp: 269.74,
        feels_like: 262.42,
        temp_min: 269.74,
        temp_max: 269.74,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 998,
        humidity: 97,
        temp_kf: 0,
      },
      weather: [
        {
          id: 600,
          main: 'Snow',
          description: 'light snow',
          icon: '13d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 6.91,
        deg: 161,
      },
      visibility: 10000,
      pop: 0.74,
      snow: {
        '3h': 0.65,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-02-22 15:00:00',
    },
    {
      dt: 1614016800,
      main: {
        temp: 271.66,
        feels_like: 265.38,
        temp_min: 271.66,
        temp_max: 271.66,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 994,
        humidity: 99,
        temp_kf: 0,
      },
      weather: [
        {
          id: 600,
          main: 'Snow',
          description: 'light snow',
          icon: '13d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 5.81,
        deg: 169,
      },
      visibility: 706,
      pop: 0.92,
      snow: {
        '3h': 1.33,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-02-22 18:00:00',
    },
    {
      dt: 1614027600,
      main: {
        temp: 272.49,
        feels_like: 266.53,
        temp_min: 272.49,
        temp_max: 272.49,
        pressure: 1004,
        sea_level: 1004,
        grnd_level: 991,
        humidity: 99,
        temp_kf: 0,
      },
      weather: [
        {
          id: 601,
          main: 'Snow',
          description: 'snow',
          icon: '13d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 5.52,
        deg: 170,
      },
      visibility: 222,
      pop: 0.63,
      snow: {
        '3h': 1.6,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-02-22 21:00:00',
    },
    {
      dt: 1614038400,
      main: {
        temp: 272.4,
        feels_like: 267.35,
        temp_min: 272.4,
        temp_max: 272.4,
        pressure: 1003,
        sea_level: 1003,
        grnd_level: 990,
        humidity: 99,
        temp_kf: 0,
      },
      weather: [
        {
          id: 601,
          main: 'Snow',
          description: 'snow',
          icon: '13n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.2,
        deg: 174,
      },
      visibility: 187,
      pop: 0.63,
      snow: {
        '3h': 2.13,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-02-23 00:00:00',
    },
    {
      dt: 1614049200,
      main: {
        temp: 272.34,
        feels_like: 267.55,
        temp_min: 272.34,
        temp_max: 272.34,
        pressure: 1001,
        sea_level: 1001,
        grnd_level: 988,
        humidity: 100,
        temp_kf: 0,
      },
      weather: [
        {
          id: 600,
          main: 'Snow',
          description: 'light snow',
          icon: '13n',
        },
      ],
      clouds: {
        all: 99,
      },
      wind: {
        speed: 3.84,
        deg: 175,
      },
      visibility: 158,
      pop: 0.58,
      snow: {
        '3h': 1.42,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-02-23 03:00:00',
    },
    {
      dt: 1614060000,
      main: {
        temp: 273.32,
        feels_like: 269.17,
        temp_min: 273.32,
        temp_max: 273.32,
        pressure: 1000,
        sea_level: 1000,
        grnd_level: 987,
        humidity: 100,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: 'Rain',
          description: 'light rain',
          icon: '10n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.13,
        deg: 207,
      },
      visibility: 103,
      pop: 0.9,
      rain: {
        '3h': 0.86,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-02-23 06:00:00',
    },
    {
      dt: 1614070800,
      main: {
        temp: 272.81,
        feels_like: 267.61,
        temp_min: 272.81,
        temp_max: 272.81,
        pressure: 1000,
        sea_level: 1000,
        grnd_level: 987,
        humidity: 98,
        temp_kf: 0,
      },
      weather: [
        {
          id: 600,
          main: 'Snow',
          description: 'light snow',
          icon: '13n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.46,
        deg: 244,
      },
      visibility: 10000,
      pop: 0.34,
      snow: {
        '3h': 0.32,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-02-23 09:00:00',
    },
    {
      dt: 1614081600,
      main: {
        temp: 270.19,
        feels_like: 265.15,
        temp_min: 270.19,
        temp_max: 270.19,
        pressure: 999,
        sea_level: 999,
        grnd_level: 986,
        humidity: 98,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 94,
      },
      wind: {
        speed: 3.76,
        deg: 251,
      },
      visibility: 8827,
      pop: 0.14,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-02-23 12:00:00',
    },
    {
      dt: 1614092400,
      main: {
        temp: 272.35,
        feels_like: 267.43,
        temp_min: 272.35,
        temp_max: 272.35,
        pressure: 999,
        sea_level: 999,
        grnd_level: 986,
        humidity: 98,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 96,
      },
      wind: {
        speed: 3.98,
        deg: 246,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-02-23 15:00:00',
    },
    {
      dt: 1614103200,
      main: {
        temp: 272.88,
        feels_like: 268.79,
        temp_min: 272.88,
        temp_max: 272.88,
        pressure: 998,
        sea_level: 998,
        grnd_level: 985,
        humidity: 100,
        temp_kf: 0,
      },
      weather: [
        {
          id: 600,
          main: 'Snow',
          description: 'light snow',
          icon: '13d',
        },
      ],
      clouds: {
        all: 99,
      },
      wind: {
        speed: 2.95,
        deg: 217,
      },
      visibility: 6775,
      pop: 0.2,
      snow: {
        '3h': 0.12,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-02-23 18:00:00',
    },
    {
      dt: 1614114000,
      main: {
        temp: 272.9,
        feels_like: 268.25,
        temp_min: 272.9,
        temp_max: 272.9,
        pressure: 997,
        sea_level: 997,
        grnd_level: 984,
        humidity: 100,
        temp_kf: 0,
      },
      weather: [
        {
          id: 600,
          main: 'Snow',
          description: 'light snow',
          icon: '13d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.76,
        deg: 225,
      },
      visibility: 30,
      pop: 0.52,
      snow: {
        '3h': 0.25,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-02-23 21:00:00',
    },
    {
      dt: 1614124800,
      main: {
        temp: 273.02,
        feels_like: 268.22,
        temp_min: 273.02,
        temp_max: 273.02,
        pressure: 999,
        sea_level: 999,
        grnd_level: 986,
        humidity: 100,
        temp_kf: 0,
      },
      weather: [
        {
          id: 600,
          main: 'Snow',
          description: 'light snow',
          icon: '13n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4,
        deg: 245,
      },
      visibility: 24,
      pop: 0.74,
      snow: {
        '3h': 0.46,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-02-24 00:00:00',
    },
    {
      dt: 1614135600,
      main: {
        temp: 273.58,
        feels_like: 268.59,
        temp_min: 273.58,
        temp_max: 273.58,
        pressure: 1000,
        sea_level: 1000,
        grnd_level: 987,
        humidity: 100,
        temp_kf: 0,
      },
      weather: [
        {
          id: 600,
          main: 'Snow',
          description: 'light snow',
          icon: '13n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.39,
        deg: 256,
      },
      visibility: 732,
      pop: 0.63,
      snow: {
        '3h': 0.45,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-02-24 03:00:00',
    },
    {
      dt: 1614146400,
      main: {
        temp: 273.95,
        feels_like: 266.96,
        temp_min: 273.95,
        temp_max: 273.95,
        pressure: 1002,
        sea_level: 1002,
        grnd_level: 989,
        humidity: 93,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 98,
      },
      wind: {
        speed: 7.11,
        deg: 259,
      },
      visibility: 10000,
      pop: 0.33,
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-02-24 06:00:00',
    },
    {
      dt: 1614157200,
      main: {
        temp: 272.39,
        feels_like: 265.18,
        temp_min: 272.39,
        temp_max: 272.39,
        pressure: 1004,
        sea_level: 1004,
        grnd_level: 990,
        humidity: 95,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03n',
        },
      ],
      clouds: {
        all: 43,
      },
      wind: {
        speed: 7.17,
        deg: 261,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-02-24 09:00:00',
    },
    {
      dt: 1614168000,
      main: {
        temp: 270.21,
        feels_like: 263.57,
        temp_min: 270.21,
        temp_max: 270.21,
        pressure: 1006,
        sea_level: 1006,
        grnd_level: 993,
        humidity: 96,
        temp_kf: 0,
      },
      weather: [
        {
          id: 801,
          main: 'Clouds',
          description: 'few clouds',
          icon: '02d',
        },
      ],
      clouds: {
        all: 22,
      },
      wind: {
        speed: 6,
        deg: 264,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-02-24 12:00:00',
    },
    {
      dt: 1614178800,
      main: {
        temp: 271.94,
        feels_like: 265.06,
        temp_min: 271.94,
        temp_max: 271.94,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 996,
        humidity: 96,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: 'Clouds',
          description: 'scattered clouds',
          icon: '03d',
        },
      ],
      clouds: {
        all: 27,
      },
      wind: {
        speed: 6.65,
        deg: 264,
      },
      visibility: 10000,
      pop: 0.04,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-02-24 15:00:00',
    },
    {
      dt: 1614189600,
      main: {
        temp: 272.66,
        feels_like: 266.21,
        temp_min: 272.66,
        temp_max: 272.66,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 997,
        humidity: 98,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: 'Clouds',
          description: 'broken clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 57,
      },
      wind: {
        speed: 6.22,
        deg: 258,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-02-24 18:00:00',
    },
    {
      dt: 1614200400,
      main: {
        temp: 272.99,
        feels_like: 268.07,
        temp_min: 272.99,
        temp_max: 272.99,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 997,
        humidity: 97,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.08,
        deg: 260,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-02-24 21:00:00',
    },
    {
      dt: 1614211200,
      main: {
        temp: 271.64,
        feels_like: 268.32,
        temp_min: 271.64,
        temp_max: 271.64,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 997,
        humidity: 99,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: 'Clouds',
          description: 'overcast clouds',
          icon: '04n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.58,
        deg: 240,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-02-25 00:00:00',
    },
    {
      dt: 1614222000,
      main: {
        temp: 272.1,
        feels_like: 268.57,
        temp_min: 272.1,
        temp_max: 272.1,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 995,
        humidity: 100,
        temp_kf: 0,
      },
      weather: [
        {
          id: 600,
          main: 'Snow',
          description: 'light snow',
          icon: '13n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2,
        deg: 224,
      },
      visibility: 135,
      pop: 0.59,
      snow: {
        '3h': 0.69,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-02-25 03:00:00',
    },
    {
      dt: 1614232800,
      main: {
        temp: 271.33,
        feels_like: 267.61,
        temp_min: 271.33,
        temp_max: 271.33,
        pressure: 1005,
        sea_level: 1005,
        grnd_level: 992,
        humidity: 100,
        temp_kf: 0,
      },
      weather: [
        {
          id: 601,
          main: 'Snow',
          description: 'snow',
          icon: '13n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.12,
        deg: 22,
      },
      visibility: 111,
      pop: 0.79,
      snow: {
        '3h': 2.11,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-02-25 06:00:00',
    },
    {
      dt: 1614243600,
      main: {
        temp: 270.43,
        feels_like: 265.89,
        temp_min: 270.43,
        temp_max: 270.43,
        pressure: 1004,
        sea_level: 1004,
        grnd_level: 991,
        humidity: 99,
        temp_kf: 0,
      },
      weather: [
        {
          id: 601,
          main: 'Snow',
          description: 'snow',
          icon: '13n',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.11,
        deg: 3,
      },
      visibility: 246,
      pop: 1,
      snow: {
        '3h': 2.07,
      },
      sys: {
        pod: 'n',
      },
      dt_txt: '2021-02-25 09:00:00',
    },
    {
      dt: 1614254400,
      main: {
        temp: 269.86,
        feels_like: 265.37,
        temp_min: 269.86,
        temp_max: 269.86,
        pressure: 1007,
        sea_level: 1007,
        grnd_level: 993,
        humidity: 99,
        temp_kf: 0,
      },
      weather: [
        {
          id: 600,
          main: 'Snow',
          description: 'light snow',
          icon: '13d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.93,
        deg: 318,
      },
      visibility: 1070,
      pop: 1,
      snow: {
        '3h': 0.95,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-02-25 12:00:00',
    },
    {
      dt: 1614265200,
      main: {
        temp: 268.94,
        feels_like: 263.98,
        temp_min: 268.94,
        temp_max: 268.94,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 996,
        humidity: 96,
        temp_kf: 0,
      },
      weather: [
        {
          id: 600,
          main: 'Snow',
          description: 'light snow',
          icon: '13d',
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.39,
        deg: 331,
      },
      visibility: 10000,
      pop: 0.4,
      snow: {
        '3h': 0.12,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-02-25 15:00:00',
    },
    {
      dt: 1614276000,
      main: {
        temp: 268.54,
        feels_like: 262.59,
        temp_min: 268.54,
        temp_max: 268.54,
        pressure: 1012,
        sea_level: 1012,
        grnd_level: 998,
        humidity: 96,
        temp_kf: 0,
      },
      weather: [
        {
          id: 600,
          main: 'Snow',
          description: 'light snow',
          icon: '13d',
        },
      ],
      clouds: {
        all: 99,
      },
      wind: {
        speed: 4.75,
        deg: 285,
      },
      visibility: 7519,
      pop: 0.39,
      snow: {
        '3h': 0.14,
      },
      sys: {
        pod: 'd',
      },
      dt_txt: '2021-02-25 18:00:00',
    },
  ],
  city: {
    id: 6077243,
    name: 'Montreal',
    coord: {
      lat: 45.5088,
      lon: -73.5878,
    },
    country: 'CA',
    population: 3268513,
    timezone: -18000,
    sunrise: 1613821678,
    sunset: 1613860108,
  },
};
