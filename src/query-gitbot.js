var git_1 = require("./git");
var error_1 = require("./error");
function queryGitbot(query) {
    // Most strict 
    if (query.startsWith("git add")) {
        return git_1.default.gitAdd();
    }
    if (query.startsWith("git remove")) {
        return git_1.default.gitRemove();
    }
    // Less strict
    if (query.includes(["rebase", "merge"])) {
        return git_1.default.gitPullVsRebase();
    }
    // if (query.includes("git stash").and.not("pop")) {
    // 	return Git.gitStash();
    // }
    // if (query.includes("git stash pop")) {
    // 	return Git.gitStashPop();
    // }
    // Least strict
    if (query.includes("what is git")) {
    }
    return error_1.default.doNotUnderstand();
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = queryGitbot;
//# sourceMappingURL=query-gitbot.js.map