
import { Router } from "express";
import healthcheck from "@/routers/healthCheck";
import recipeRouter from "@/routers/recipe";
import cityRouter from "@/routers/city";
import weatherRouter from "@/routers/weather";

const router = Router();

router.use(healthcheck);
router.use("/recipe", recipeRouter);
router.use("/city", cityRouter);
router.use("/weather", weatherRouter);

export default router;
