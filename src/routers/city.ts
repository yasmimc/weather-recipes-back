import { Router } from "express";
import * as cityController from "@/controllers/city";

const router = Router();

router.get("/find", cityController.findCitiesByName);

export default router;
