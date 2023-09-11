"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSlackInfo = void 0;
const date_fns_1 = require("date-fns");
const githubUtils_1 = require("../utils/githubUtils");
const getSlackInfo = async (req, res) => {
    const { slack_name, track } = req.query;
    if (!slack_name || !track) {
        return res
            .status(400)
            .json({ error: "slack_name and track are required parameters" });
    }
    const currentDate = new Date();
    const currentDay = "Sunday";
    const utcTime = (0, date_fns_1.format)(currentDate, "yyyy-MM-dd'T'HH:mm:ss'Z'");
    const response = {
        slack_name: slack_name,
        current_day: currentDay,
        utc_time: utcTime,
        track: track,
        github_file_url: (0, githubUtils_1.getGitHubFileURL)(),
        github_repo_url: (0, githubUtils_1.getGitHubRepoURL)(),
        status_code: 200,
    };
    res.status(200).json(response);
};
exports.getSlackInfo = getSlackInfo;
