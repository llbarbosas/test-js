const log = require('./util/log');

module.exports = { test };

/**
 * @param {string} testName 
 * @param {function} callback 
 */
function test(testName, callback) {
	log.testName(`${testName}`);

	/**
	 * @property {function} task
	 */
	const testChildren = {
		task
	}

	callback(testChildren);
}

/**
 * @param {string} taskName 
 * @param {function} callback 
 */
function task(taskName, callback) {
	log.taskName(taskName, 1);

	/**
	 * @property {function} expect
	 * @property {function} finishIf
	 */
	const taskChildren = {
		expect: expect.bind({
			taskName
		}),

		finishIf: finishIf.bind({
			taskName
		})
	}

	try{
		callback(taskChildren)
	} catch(err){
		console.log(err.message)
	}
	
}

function finishIf(reason, condition) {
	if(condition)
		throw new Error(log.errorString(this.taskName, reason));
}

/**
 * @param {string} returnObtained
 */
function expect(returnObtained) {
	const expectTypes = {
		to: {
			equal: (returnExpected) => {
				const condtaskion = returnObtained == returnExpected;

				if (condtaskion)
					log.equal(returnExpected, returnObtained);
				else
					log.notEqual(returnExpected, returnObtained);
			}
		}
	};

	return expectTypes;
}