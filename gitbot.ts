import queryGitbot from "./query-gitbot";
import * as _ from "lodash";

export default function gitbot(query: string): string {
	const NO_RESPONSE="";
	let queryWords = query.split(" ");
	if (!(/gitbot/.test(queryWords[0]))) {
		return NO_RESPONSE;
	}
	queryWords.shift();
	let queryString = queryWords.join(" ");
	let queryInstance = new Query(queryString);
	return queryGitbot(queryInstance);
}

class Query {
	
	queryString: string;
	
	constructor (queryString: string) {
		this.queryString = queryString;
	}
	
	startsWith (keyword: string | string[]) {
		if (typeof keyword === "string") {
			return this.startsWithSingular(keyword);	
		} else {
			let results = _.map(keyword, (value) => {
				return this.startsWithSingular(value);
			});
			return _.every(results);
		}
	}
	
	private startsWithSingular (keyword: string) {
		let regex = new RegExp("^" + keyword);
		return regex.test(this.queryString)
	}
	
	includes (keyword: string | string[]) {
		if (typeof keyword === "string") {
			return this.includesSingular(keyword);
		} else {
			let results = _.map(keyword, (value) => {
				return this.includesSingular(value)
			});
			return _.every(results);
		}
	}
	
	private includesSingular (keyword: string) {
		let regex = new RegExp(keyword);
		return regex.test(this.queryString);
	}
}