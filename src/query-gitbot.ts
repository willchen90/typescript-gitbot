import Git from "./git";
import Error from "./error";
import QueryBuilder from "./query-builder";

class QueryHelper {
	private query: QueryBuilder;
	constructor(query: QueryBuilder) {
		this.query = query;
	}
	static create (query: QueryBuilder) {
		return new QueryHelper(query);
	}	
	topic (keyword: string) {
		return (this.query.startsWith(keyword) || 
			   this.query.startsWith("what is " +  keyword));
	}
}

export default function queryGitbot(query: QueryBuilder): string {
	let queryHelper = QueryHelper.create(query);
	// Most strict 
	if (queryHelper.topic("git add")) {
		return Git.gitAdd();
	}
	if (query.startsWith("git remove") || query.startsWith("what is git remove")) {
		return Git.gitRemove();
	}
	
	// Less strict
	if (query.includes(["rebase", "merge"])) {
		return Git.gitMergeVsRebase();
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
	
	
	return Error.doNotUnderstand();
}