var TEST_NUMBER = 0;
const RESET = "\x1b[0m";
const RED = "\x1b[31m";
const GREEN = "\x1b[32m";
const OK = "✓";
const ERROR = "✕";

const log = {
    withTab: function(text, tabLevel){
        var tab = "\t".repeat(tabLevel);
        console.log(tab + text);
    },

    testName: function(testName){
        console.log(`${++TEST_NUMBER}) ${testName}`);
    },

    taskName: function(taskName){
        this.withTab(taskName, 1);
    },

    equal: function(returnExpected, returnObtained){
        this.withTab(`[${isOk(true)}] ${returnExpected} is equal to ${returnObtained}`, 2);
    },

    notEqual: function(returnExpected, returnObtained){
        this.withTab(`[${isOk(false)}] ${returnExpected} isn't equal to ${returnObtained}`, 2);
    },

    errorString: (task, reason) => `\t${RED}ending${RESET} \"${task}\" ${RED}because${RESET} ${reason}`,
}

function isOk(condition){
	if(condition)
		return GREEN + OK + RESET;
	else 
		return RED + ERROR + RESET;
}

module.exports = log;