
import { Router } from "express";
import healthcheck from "@/routers/healthCheck";

const router = Router();

router.use(healthcheck);

export default router;
