import WeatherData from "@/interfaces/weather";

abstract class Weather {  
  static format(object: WeatherData) {
    return {
      lat: object.lat,
      lon: object.lon,
      timezone: object.timezone,
      timezone_offset: object.timezone_offset,
      current: object.current
    };
  }
}

export default Weather;
