"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSlackInfo = void 0;
const date_fns_1 = require("date-fns");
const githubUtils_1 = require("../utils/githubUtils");
const getSlackInfo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { slack_name, track } = req.query;
    if (!slack_name || !track) {
        return res
            .status(400)
            .json({ error: "slack_name and track are required parameters" });
    }
    const currentDate = new Date();
    const currentDay = (0, date_fns_1.format)(currentDate, "EEEE");
    const utcTime = (0, date_fns_1.format)((0, date_fns_1.addMinutes)(currentDate, currentDate.getTimezoneOffset()), "yyyy-mm-dd'T'HH:mm:ssXXX");
    const response = {
        slack_name: slack_name,
        current_date: currentDate,
        utc_time: utcTime,
        track: track,
        github_file_url: (0, githubUtils_1.getGitHubFileURL)(),
        github_repo_url: (0, githubUtils_1.getGitHubRepoURL)(),
        status_code: 200,
    };
    res.status(200).json(response);
});
exports.getSlackInfo = getSlackInfo;
