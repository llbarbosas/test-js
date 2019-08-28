# test-js
Uma lib de testes pra testar conhecimentos em TDD usando Javascript

```javascript
describe('Teste do teste', ({ it }) => {
	it('O teste deve ser um teste', ({ expect, done }) => {
		expect("teste").to.equal("teste")
	})
})
```

```text
1) Teste do teste
        O teste deve ser um teste
                [✓] teste is equal to teste
```
