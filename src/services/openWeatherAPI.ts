import api from "./externalAPIs/openWeather";

export function auth() {
  return `&appid=${process.env.OPEN_WEATHER_API_KEY}`;
}

export async function getCitiesByName(name: string) {
  const cities = await api.get(`/find?q=${name}${auth()}`);
 
  return cities.data.list;
}

