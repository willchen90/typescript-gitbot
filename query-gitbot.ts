export default function queryGitbot(query: string): string {
	if ((/^git add/).test(query)) {
		return Git.gitAdd();
	}
	if ((/^git remove/).test(query)) {
		return Git.gitRemove();
	}
	if ((/rebase/).test(query) && (/merge/.test(query))) {
		return Git.gitPullVsRebase();
	}
	return Error.doNotUnderstand();
}