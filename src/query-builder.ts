import * as _ from "lodash";
export default class QueryBuilder {
	
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
			return _.some(results);
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