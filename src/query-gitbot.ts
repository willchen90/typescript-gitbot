import Git from "./git";
import Error from "./error";
import QueryBuilder from "./query-builder";

export default function queryGitbot(query: QueryBuilder): string {
	
	// Most strict 
	if (query.startsWith("git add")) {
		return Git.gitAdd();
	}
	if (query.startsWith("git remove")) {
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