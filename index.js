const log = require('./log');

module.exports = { describe };

function describe(testName, callback){
	log.testName(`${testName}`);

	callback({
		it: _it
	});
}

function _it(subtestName, callback){
	log.subtestName(subtestName, 1);

	callback({
		expect: _expect.bind({
			subtestName
		})
	});
}

function _expect(returnObtained){
	const expectTypes = {
		to: {
			equal: (returnExpected) => {
				const condition = returnObtained == returnExpected;

				if(condition)
					log.equal(returnExpected, returnObtained);
				else
					log.notEqual(returnExpected, returnObtained);
			}
		}
	};

	return expectTypes;
}


