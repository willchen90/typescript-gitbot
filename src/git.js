var Git = (function () {
    function Git() {
    }
    Git.gitAdd = function () {
        return "git add allows you to add files";
    };
    Git.gitRemove = function () {
        return "git remove allows you to remove files";
    };
    Git.gitPullVsRebase = function () {
        return "I recommend this article by Atlassian: " +
            "https://www.atlassian.com/git/tutorials/merging-vs-rebasing/ \n";
    };
    return Git;
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Git;
//# sourceMappingURL=git.js.map