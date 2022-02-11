import * as openWeatherService from "@/services/openWeatherAPI"; 

export async function findCitiesByName(name: string) {
  const cities = openWeatherService.getCitiesByName(name);
  return cities;
}
