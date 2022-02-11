import { Request, Response } from "express";

import * as cityService from "@/services/city";

export async function findCitiesByName(req: Request, res: Response) {
  const { name } = req.query;
  const cities = await cityService.findCitiesByName(`${name}`);
  res.send(cities);
}
