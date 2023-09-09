"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const slackInfoController_1 = require("../controllers/slackInfoController");
const router = (0, express_1.Router)();
router.get("/slackInfo", slackInfoController_1.getSlackInfo);
exports.default = router;
