import { Request, Response } from "express";

export async function getRecipe(req: Request, res: Response)  {
  res.send("Uma receita!");
}
