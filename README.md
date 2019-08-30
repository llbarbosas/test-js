# test-js
Uma lib de testes pra testar conhecimentos em TDD usando Javascript

```javascript
test('Testando o teste', ({ task }) => {
	task('Um \"teste\" deve ser um \"teste\"', ({ expect }) => {
		expect("test").to.equal("test")
	})

	task('Finalizando os trabalhos', ({ expect, finishIf }) => {
		const valorEsperado = null

		expect(Safe(valorEsperado).isSafe).to.equal(true)
		finishIf(
			"valorEsperado é null ou undefined, os demais testes não precisam ser executados", 
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
```

```text
1) Testando o teste
        Um "teste" deve ser um "teste"
                [✓] test is equal to test
        Finalizando os trabalhos
                [✕] true isn't equal to false
        ending "Finalizando os trabalhos" because valorEsperado é null, os demais testes não precisam ser executados
2) Estamos seguros?
        Dibrando nulls e undefineds
                [✓] true is equal to true
                [✓] true is equal to true
                [✓] true is equal to true
        O que vale é o que cada um tem dentro de si
                [✓] true is equal to true
                [✓] false is equal to false
```
