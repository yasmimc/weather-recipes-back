import { Router } from "express";
import * as recipeController from "@/controllers/recipe";

const router = Router();

router.get("/", recipeController.getRecipe);

export default router;
