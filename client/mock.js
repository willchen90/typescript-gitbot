var gitbot_1 = require("../src/gitbot");
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
console.log("Mock Gitbot mode!");
var prompt = function () {
    rl.question("GITBOT: how can I help you?\n", function (query) {
        var response = gitbot_1.default(query);
        if (response.length) {
            console.log("GITBOT:", response, "\n");
        }
        prompt();
    });
};
prompt();
//# sourceMappingURL=mock.js.map