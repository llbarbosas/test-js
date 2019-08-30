const { test } = require("..")
const { Safe } = require('../safe')

test('Testando o teste', ({ task }) => {
	task('Um \"teste\" deve ser um \"teste\"', ({ expect }) => {
		expect("teste").to.equal("teste")
	})

	task('Finalizando os trabalhos', ({ expect, finishIf }) => {
		const valorEsperado = null

		expect(Safe(valorEsperado).isSafe).to.equal(true)
		finishIf(
			"valorEsperado é null, os demais testes não precisam ser executados", 
			!Safe(valorEsperado).isSafe
		)

		// ...
		expect(valorEsperado).to.equal("valor esperado")
		// ...
	})
})

test('Estamos seguros?', ({ task }) => {
	task('Dibrando nulls e undefineds', ({ expect }) => {
		expect(Safe(null).isNull).to.equal(true)
		expect(Safe(undefined).isUndefined).to.equal(true)
		expect(Safe("Tô safe!").isSafe).to.equal(true)
	})

	task('O que vale é o que cada um tem dentro de si', ({ expect }) => {
		expect(Safe([]).isEmpty).to.equal(true)
		expect(Safe([1, 2, 3]).isEmpty).to.equal(false)
	})
})