describe('Teste do teste', (it) => {
	it('O teste deve ser um teste', (expect) => {
		expect("teste").to.equal("teste");
	});
});

// -----------------------------------

function describe(text, callback){
	log(`N) ${text}`);

	callback(_it);
}


function _it(text, callback){
	log(text, 1);
 
	callback(_expect);
}

function _expect(returnObtained){
	const expectTypes = {
		to: {
			equal: (returnExpected) => {
				const condition = returnObtained == returnExpected;

				log(`[${isOk(condition)}] ${returnObtained} == ${returnExpected}`, 3);
			}
		}
	};

	return expectTypes;
}

function log(text, tabLevel){
	var tab = "\t".repeat(tabLevel);
	console.log(tab + text);
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
