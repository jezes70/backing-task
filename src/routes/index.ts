import { Router } from "express";
import { getSlackInfo } from "../controllers/slackInfoController";

const router = Router();
router.get("/slackInfo", getSlackInfo);

export default router;
