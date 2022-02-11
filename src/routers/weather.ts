import { Router } from "express";
import * as weatherService from "@/controllers/weather";

const router = Router();

router.get("/", weatherService.getWeatherNow);

export default router;
