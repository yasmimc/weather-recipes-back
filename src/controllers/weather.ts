import { Request, Response } from "express";

import * as weatherService from "@/services/weather";

export async function getWeatherNow(req: Request, res: Response) {
  const { lat, lon } = req.query;

  const weatherInfo = await weatherService.getWeatherNow({ lat: Number(lat), lon: Number (lon) });
  
  res.send(weatherInfo);
}
