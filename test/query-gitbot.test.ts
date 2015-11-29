import chai = require('chai');
var expect = chai.expect;

import queryGitbot from "../src/query-gitbot"
import QueryBuilder from "../src/query-builder"
import Git from "../src/git"

let match = (query, expectedResponse) => {
	it("match: " + query, ()=>{
		let res = queryGitbot(new QueryBuilder(query));
		expect(res).to.equal(expectedResponse());
	});
}
let notMatch = (query, expectedResponse) => {
	it ("not match: " + query, ()=>{
		let res = queryGitbot(new QueryBuilder(query));
		expect(res).to.not.equal(expectedResponse());	
	})
}

describe("Query matches the right response", ()=>{
	describe("git add", ()=>{
		match("git add", Git.gitAdd);
		match("what is git add", Git.gitAdd);
		notMatch("something git add", Git.gitAdd);
	});
	describe("git remove", ()=>{
		match("git remove", Git.gitRemove);
	});
	describe("git rebase vs merge", ()=>{
		match("git rebase vs merge", Git.gitMergeVsRebase);
		notMatch("git rebase", Git.gitMergeVsRebase);
	});
});