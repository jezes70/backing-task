import { Router } from "express";
import { getSlackInfo } from "../controllers/slackInfoController";

const router = Router();
router.get("/api", getSlackInfo);

export default router;
