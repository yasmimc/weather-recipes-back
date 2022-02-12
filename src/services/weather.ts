import Weather from "@/entities/weather";
import Coord from "@/interfaces/coord";
import WeatherData from "@/interfaces/weather";
import * as openWeatherService from "@/services/openWeatherAPI";

export async function getWeatherNow(coord: Coord) {
  const weatherInfos = await openWeatherService.getWeatherByCoords(coord);
  
  return Weather.format(weatherInfos);
}

export function getTemperature(weatherInfos: WeatherData) {
  return weatherInfos.current.temp;
}
