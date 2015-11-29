var chai = require('chai');
var expect = chai.expect;
var query_gitbot_1 = require("../src/query-gitbot");
var query_builder_1 = require("../src/query-builder");
var git_1 = require("../src/git");
var match = function (query, expectedResponse) {
    it("match: " + query, function () {
        var res = query_gitbot_1.default(new query_builder_1.default(query));
        expect(res).to.equal(expectedResponse());
    });
};
var notMatch = function (query, expectedResponse) {
    it("not match: " + query, function () {
        var res = query_gitbot_1.default(new query_builder_1.default(query));
        expect(res).to.not.equal(expectedResponse());
    });
};
describe("Query matches the right response", function () {
    describe("git add", function () {
        match("git add", git_1.default.gitAdd);
        match("what is git add", git_1.default.gitAdd);
        notMatch("something git add", git_1.default.gitAdd);
    });
    describe("git remove", function () {
        match("git remove", git_1.default.gitRemove);
    });
    describe("git rebase vs merge", function () {
        match("git rebase vs merge", git_1.default.gitMergeVsRebase);
        notMatch("git rebase", git_1.default.gitMergeVsRebase);
    });
});
//# sourceMappingURL=query-gitbot.test.js.map