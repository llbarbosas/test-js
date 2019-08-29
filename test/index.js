const { describe } = require("..")
const { Safe } = require('../types')

describe('Testing the test', ({ it }) => {
	it('A test must be a test', ({ expect }) => {
		expect("test").to.equal("test")
	})

	it('Ending tasks', ({ done }) => {
		done()
	})
})

describe('Is it safe?', ({ it }) => {
	it('Avoiding null and undefined', ({ expect }) => {
		expect(Safe(null).isNull).to.equal(true)
		expect(Safe(undefined).isUndefined).to.equal(true)
		expect(Safe("I'm safe!").isSafe).to.equal(true)
	})

	it('Values inside', ({ expect }) => {
		expect(Safe([]).isEmpty).to.equal(true)
		expect(Safe([1, 2, 3]).isEmpty).to.equal(false)
	})
})