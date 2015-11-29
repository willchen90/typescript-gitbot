var query_gitbot_1 = require("./query-gitbot");
var query_1 = require("./query");
function gitbot(query) {
    var NO_RESPONSE = "";
    var queryWords = query.split(" ");
    if (!(/gitbot/.test(queryWords[0]))) {
        return NO_RESPONSE;
    }
    queryWords.shift();
    var queryString = queryWords.join(" ");
    var queryInstance = new query_1.default(queryString);
    return query_gitbot_1.default(queryInstance);
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = gitbot;
//# sourceMappingURL=gitbot.js.map