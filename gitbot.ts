export default function gitbot(query: string): string {
	const NO_RESPONSE="";
	let queryWords = query.split(" ");
	if (!(/gitbot/.test(queryWords[0]))) {
		return NO_RESPONSE;
	}
	queryWords.shift();
	return queryGitbot(queryWords.join(" "));
}

function queryGitbot(query: string): string {
	if ((/^git add/).test(query)) {
		return gitAddContent();
	}
	if ((/^git remove/).test(query)) {
		return gitRemoveContent();
	}
	return query;
}

function gitAddContent() {
	return "git add allows you to add files"
}

function gitRemoveContent() {
	return "git remove allows you to remove files"
}