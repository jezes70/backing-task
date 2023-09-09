"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGitHubRepoURL = exports.getGitHubFileURL = void 0;
const getGitHubFileURL = () => {
    return "https://github.com/username/repo/blob/main/file_name.ext";
};
exports.getGitHubFileURL = getGitHubFileURL;
const getGitHubRepoURL = () => {
    return "https://github.com/username/repo";
};
exports.getGitHubRepoURL = getGitHubRepoURL;
