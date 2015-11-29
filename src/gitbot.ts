import queryGitbot from "./query-gitbot";
import * as _ from "lodash";
import QueryBuilder from "./query-builder";

export default function gitbot(query: string): string {
	const NO_RESPONSE="";
	let queryWords = query.split(" ");
	if (!(/gitbot/.test(queryWords[0]))) {
		return NO_RESPONSE;
	}
	queryWords.shift();
	let queryString = queryWords.join(" ");
	return queryGitbot(new QueryBuilder(queryString));
}