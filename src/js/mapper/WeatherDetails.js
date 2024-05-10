function WeatherDetails(weatherCode) {
  // https://gist.githubusercontent.com/stellasphere/9490c195ed2b53c707087c8c2db4ec0c/raw/76b0cb0ef0bfd8a2ec988aa54e30ecd1b483495d/descriptions.json
  const weatherCodeMap = {
    "0": {
      "desc": "Sunny",
      "img": "http://openweathermap.org/img/wn/01d@2x.png"
    },
    "1": {
      "desc": "Mainly Sunny",
      "img": "http://openweathermap.org/img/wn/01d@2x.png"
    },
    "2": {
      "desc": "Partly Cloudy",
      "img": "http://openweathermap.org/img/wn/02d@2x.png"
    },
    "3": {
      "desc": "Cloudy",
      "img": "http://openweathermap.org/img/wn/03d@2x.png"
    },
    "45": {
      "desc": "Foggy",
      "img": "http://openweathermap.org/img/wn/50d@2x.png"
    },
    "48": {
      "desc": "Rime Fog",
      "img": "http://openweathermap.org/img/wn/50d@2x.png"
    },
    "51": {
      "desc": "Light Drizzle",
      "img": "http://openweathermap.org/img/wn/09d@2x.png"
    },
    "53": {
      "desc": "Drizzle",
      "img": "http://openweathermap.org/img/wn/09d@2x.png"
    },
    "55": {
      "desc": "Heavy Drizzle",
      "img": "http://openweathermap.org/img/wn/09d@2x.png"
    },
    "56": {
      "desc": "Light Freezing Drizzle",
      "img": "http://openweathermap.org/img/wn/09d@2x.png"
    },
    "57": {
      "desc": "Freezing Drizzle",
      "img": "http://openweathermap.org/img/wn/09d@2x.png"
    },
    "61": {
      "desc": "Light Rain",
      "img": "http://openweathermap.org/img/wn/10d@2x.png"
    },
    "63": {
      "desc": "Rain",
      "img": "http://openweathermap.org/img/wn/10d@2x.png"
    },
    "65": {
      "desc": "Heavy Rain",
      "img": "http://openweathermap.org/img/wn/10d@2x.png"
    },
    "66": {
      "desc": "Light Freezing Rain",
      "img": "http://openweathermap.org/img/wn/10d@2x.png"
    },
    "67": {
      "desc": "Freezing Rain",
      "img": "http://openweathermap.org/img/wn/10d@2x.png"
    },
    "71": {
      "desc": "Light Snow",
      "img": "http://openweathermap.org/img/wn/13d@2x.png"
    },
    "73": {
      "desc": "Snow",
      "img": "http://openweathermap.org/img/wn/13d@2x.png"
    },
    "75": {
      "desc": "Heavy Snow",
      "img": "http://openweathermap.org/img/wn/13d@2x.png"
    },
    "77": {
      "desc": "Snow Grains",
      "img": "http://openweathermap.org/img/wn/13d@2x.png"
    },
    "80": {
      "desc": "Light Showers",
      "img": "http://openweathermap.org/img/wn/09d@2x.png"
    },
    "81": {
      "desc": "Showers",
      "img": "http://openweathermap.org/img/wn/09d@2x.png"
    },
    "82": {
      "desc": "Heavy Showers",
      "img": "http://openweathermap.org/img/wn/09d@2x.png"
    },
    "85": {
      "desc": "Light Snow Showers",
      "img": "http://openweathermap.org/img/wn/13d@2x.png"
    },
    "86": {
      "desc": "Snow Showers",
      "img": "http://openweathermap.org/img/wn/13d@2x.png"
    },
    "95": {
      "desc": "Thunderstorm",
      "img": "http://openweathermap.org/img/wn/11d@2x.png"
    },
    "96": {
      "desc": "Light Thunderstorms With Hail",
      "img": "http://openweathermap.org/img/wn/11d@2x.png"
    },
    "99": {
      "desc": "Thunderstorm With Hail",
      "img": "http://openweathermap.org/img/wn/11d@2x.png"
    }
  };

  return weatherCodeMap[weatherCode];
}

export default WeatherDetails;

