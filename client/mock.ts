import gitbot from "../src/gitbot";
let readline = require('readline');

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Mock Gitbot mode!");

var prompt = function(){ 
    rl.question("GITBOT: how can I help you?\n", function(query) {
        let response = gitbot(query);
        if (response.length) {
            console.log("GITBOT:", response, "\n");        
        }
        prompt();
    });
}

prompt();
