import Git from "./git";
import Error from "./error";
import queryGitbot from "./query-gitbot";

export default function gitbot(query: string): string {
	const NO_RESPONSE="";
	let queryWords = query.split(" ");
	if (!(/gitbot/.test(queryWords[0]))) {
		return NO_RESPONSE;
	}
	queryWords.shift();
	return queryGitbot(queryWords.join(" "));
}
