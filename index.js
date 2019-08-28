const log = require('./util/log');

module.exports = { describe };

/**
 * @param {string} testName 
 * @param {function} callback 
 */
function describe(testName, callback) {
	log.testName(`${testName}`);

	/**
	 * @property {Function} it
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
	console.log(`\t ending \"${this.subtestName}\"`);
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

/*
Stackoverflow <3

['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp'].forEach(
    function(name) {
        window['is' + name] = function(obj) {
              return toString.call(obj) == '[object ' + name + ']';
    };
});

module.exports = [
  'Arguments',
  'Function',
  'String',
  'Number',
  'Date',
  'RegExp'
].reduce( (obj, name) => {
  obj[ 'is' + name ] = x => toString.call(x) == '[object ' + name + ']';
  return obj;
}, {});
*/

