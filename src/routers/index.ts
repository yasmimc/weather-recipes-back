
import { Router } from "express";
import healthcheck from "@/routers/healthCheck";
import recipeRouter from "@/routers/recipe";

const router = Router();

router.use(healthcheck);
router.use("/recipe", recipeRouter);

export default router;
