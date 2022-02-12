import Coord from "@/interfaces/coord";
import * as edeamamService from "@/services/edamamAPI";
import * as weatherService from "@/services/weather";

export async function getRecipeByDishType(dishType: string[]) {
  return await edeamamService.getRecipesByDishType(dishType);
}

export async function getRecipesByTemp(temp: number) {
  if (temp > 30) {
    return await getRecipeByDishType(["Salad"]);
  }
  if (temp > 20) {
    return await getRecipeByDishType(["Cereals", "Preps"]);
  }
  return await getRecipeByDishType(["Soup"]);
}

export function getRandomRecipe(recipes: object[]) {
  const max = recipes.length;
  const randomIndex = Math.floor(Math.random() * max);
  return recipes[randomIndex];
}

export async function getRecipeByWeather(coord: Coord) {
  const weatherInfos = await weatherService.getWeatherNow(coord);
  const temp = weatherService.getTemperature(weatherInfos);
  const recipes = await getRecipesByTemp(temp);
  return getRandomRecipe(recipes);
}
