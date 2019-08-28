var TEST_NUMBER = 0;

const log = {
    withTab: function(text, tabLevel){
        var tab = "\t".repeat(tabLevel);
        console.log(tab + text);
    },

    testName: function(testName){
        console.log(`${++TEST_NUMBER}) ${testName}`);
    },

    subtestName: function(subtestName){
        this.withTab(subtestName, 1);
    },

    equal: function(returnExpected, returnObtained){
        this.withTab(`[${isOk(true)}] ${returnExpected} is equal to ${returnObtained}`, 2);
    },

    notEqual: function(returnExpected, returnObtained){
        this.withTab(`[${isOk(false)}] ${returnExpected} isn't equal to ${returnObtained}`, 2);
    }
}

function isOk(condition){
	const RESET = "\x1b[0m";
	const RED = "\x1b[31m";
	const GREEN = "\x1b[32m";
	const OK = "✓";
	const ERROR = "✕";

	if(condition)
		return GREEN + OK + RESET;
	else 
		return RED + ERROR + RESET;
}

module.exports = log;