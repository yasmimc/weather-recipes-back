import Weather from "@/entities/weather";
import Coord from "@/interfaces/coord";
import * as openWeatherService from "@/services/openWeatherAPI";

export async function getWeatherNow(coord: Coord) {
  const weatherInfos = await openWeatherService.getWeatherByCoords(coord);
  
  return Weather.format(weatherInfos);
}

