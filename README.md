# test-js
Uma lib de testes pra testar conhecimentos em TDD usando Javascript

```javascript
describe('Testing the test', ({ it }) => {
	it('A test must be a test', ({ expect }) => {
		expect("test").to.equal("test")
	})

	it('Finish tasks', ({ done }) => {
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
```

```text
1) Testing the test
	A test must be a test
		[✓] test is equal to test
	Finish tasks
	finish "Finish tasks"
2) Is it safe?
	Avoiding null and undefined
		[✓] true is equal to true
		[✓] true is equal to true
		[✓] true is equal to true
	Values inside
		[✓] true is equal to true
		[✓] false is equal to false
```
