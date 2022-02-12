import { Request, Response } from "express";
import * as recipeService from "@/services/recipe";
import BadRequestError from "@/errors/BadRequestError";

export async function getRecipe(req: Request, res: Response) {
  const lat = Number(req.query.lat);
  const lon = Number(req.query.lon);

  if (!lat || !lon) {
    throw new BadRequestError("You must inform a latitude (lat) and longitude (lon).");
  }

  const recipe = await recipeService.getRecipeByWeather({ lat, lon });
  res.send(recipe);
}
