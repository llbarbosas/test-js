const { describe } = require("..");

describe('Teste do teste', ({ it }) => {
	it('O teste deve ser um teste', ({ expect, done }) => {
		expect("teste").to.equal("teste")
		done()
	})
})