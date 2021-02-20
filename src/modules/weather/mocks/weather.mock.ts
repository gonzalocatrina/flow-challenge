export const ipApiResponse={
        query: "24.48.0.1",
        status: "success",
        country: "Canada",
        countryCode: "CA",
        region: "QC",
        regionName: "Quebec",
        city: "Montreal",
        zip: "H1S",
        lat: 45.5808,
        lon: -73.5825,
        timezone: "America/Toronto",
        isp: "Le Groupe Videotron Ltee",
        org: "Videotron Ltee",
        as: "AS5769 Videotron Telecom Ltee"
      };

export const ipApiFailResponse ={
        query: "::1",
        message: "reserved range",
        status: "fail"
    };

export const weatherResponse={
        "coord": {
            "lon": -73.5878,
            "lat": 45.5088
        },
        "weather": [
            {
                "id": 804,
                "main": "Clouds",
                "description": "overcast clouds",
                "icon": "04d"
            }
        ],
        "base": "stations",
        "main": {
            "temp": 266.12,
            "feels_like": 261.98,
            "temp_min": 264.26,
            "temp_max": 268.15,
            "pressure": 1017,
            "humidity": 79
        },
        "visibility": 5036,
        "wind": {
            "speed": 1.54,
            "deg": 330
        },
        "clouds": {
            "all": 86
        },
        "dt": 1613836279,
        "sys": {
            "type": 1,
            "id": 498,
            "country": "CA",
            "sunrise": 1613821678,
            "sunset": 1613860108
        },
        "timezone": -18000,
        "id": 6077243,
        "name": "Montreal",
        "cod": 200
}

export const weatherNotFound = { statusCode: 404, message: 'Not Found' }
