import Git from "./git";
import Error from "./error";

export default function queryGitbot(query: Query): string {
	if (query.startsWith("git add")) {
		return Git.gitAdd();
	}
	if (query.startsWith("git remove")) {
		return Git.gitRemove();
	}
	if (query.includes(["rebase", "merge"])) {
		return Git.gitPullVsRebase();
	}
	if (query.includes("git stash")) {
		return Git.gitStash();
	}
	
	return Error.doNotUnderstand();
}