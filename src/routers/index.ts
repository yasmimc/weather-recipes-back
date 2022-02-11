
import { Router } from "express";
import healthcheck from "@/routers/healthCheck";
import recipeRouter from "@/routers/recipe";
import cityRouter from "@/routers/city";

const router = Router();

router.use(healthcheck);
router.use("/recipe", recipeRouter);
router.use("/city", cityRouter);

export default router;
