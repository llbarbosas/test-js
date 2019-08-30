const log = require('./util/log');

module.exports = { describe };

/**
 * @param {string} testName 
 * @param {function} callback 
 */
function describe(testName, callback) {
	log.testName(`${testName}`);

	/**
	 * @property {function} it
	 */
	const describeChildren = {
		it
	}

	callback(describeChildren);
}

/**
 * @param {string} subtestName 
 * @param {function} callback 
 */
function it(subtestName, callback) {
	log.subtestName(subtestName, 1);

	/**
	 * @property {function} expect
	 * @property {function} done
	 */
	const itChildren = {
		expect: expect.bind({
			subtestName
		}),

		finishIf: finishIf.bind({
			subtestName
		})
	}

	try{
		callback(itChildren)
	} catch(err){
		console.log(err.message)
	}
	
}

function finishIf(reason, condition) {
	if(condition)
		throw new Error(log.errorString(this.subtestName, reason));
}

/**
 * @param {string} returnObtained
 */
function expect(returnObtained) {
	const expectTypes = {
		to: {
			equal: (returnExpected) => {
				const condition = returnObtained == returnExpected;

				if (condition)
					log.equal(returnExpected, returnObtained);
				else
					log.notEqual(returnExpected, returnObtained);
			}
		}
	};

	return expectTypes;
}