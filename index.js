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
		done: done.bind({
			subtestName
		})
	}

	callback(itChildren);
}

function done() {
	console.log(`\tending \"${this.subtestName}\"`);
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