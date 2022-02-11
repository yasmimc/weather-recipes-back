import ExternalApiError from "@/errors/ExternalApiError";
import Coord from "@/interfaces/coord";
import api from "./externalAPIs/openWeather";

function auth() {
  return `&appid=${process.env.OPEN_WEATHER_API_KEY}`;
}

export async function getCitiesByName(name: string) {
  try {
    const cities = await api.get(`/find?q=${name}${auth()}`); 
    return cities.data.list;
  } catch (error) {
    throw new ExternalApiError("OpenWeather API error");
  }
}

