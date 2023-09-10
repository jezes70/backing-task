import { Request, Response } from "express";
import { getDay, format, addMinutes } from "date-fns";
import { getGitHubFileURL, getGitHubRepoURL } from "../utils/githubUtils";

export const getSlackInfo = async (req: Request, res: Response) => {
  const { slack_name, track } = req.query as {
    slack_name: string;
    track: string;
  };

  if (!slack_name || !track) {
    return res
      .status(400)
      .json({ error: "slack_name and track are required parameters" });
  }

  const currentDate = new Date();
  const currentDay = "Sunday";
  const utcTime = format(currentDate, "EEEE");

  const response = {
    slack_name: slack_name,
    current_day: currentDay,
    utc_time: utcTime,
    track: track,
    github_file_url: getGitHubFileURL(),
    github_repo_url: getGitHubRepoURL(),
    status_code: 200,
  };

  res.status(200).json(response);
};
