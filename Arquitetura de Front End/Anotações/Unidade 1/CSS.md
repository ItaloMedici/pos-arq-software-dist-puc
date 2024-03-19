#css
Cascading Style Sheet (AKA CSS). É uma linguagem declarativa que concentra as regras visuais de um documento [[HTML]]. Temos três opções para aplicar as regras de CSS: 
#### Arquivo externo
Essa abordagem necessita de um arquivo próprio para o CSS, e deve ser ligado ao documento através da tag `link`:
```HTML
<head>
	<link rel="stylesheet" href="styles.css">
</head>
```

* ✅ Melhor modularização e manutenibilidade
	* Possibilita desacoplar os estilos do documento para um arquivo separado, ajudando assim na manutenção desse css.
* ✅ Separação de conceitos e responsabilidades
	* Mantem a separação do que é documento e oque é estilo
* ✅ Permite atualizar regras css de um único lugar
#### Bloco de estilos
Essa bordagem declara um bloco de código CSS dentro do documento HTML, através da tag `style`

```HTML
<head>
	<style>
		.title {
			color: red
		}
	</style>
</head>
```

* ⭕ Regras restritas a um único documento;
	* Por ser escrita dentro do documento, so pode ser utilizada exclusivamente por ele
* ⭕ Pouca reusabilidade;
	* Caso haja um outro documento com a mesma estilização visual, será necessário duplicar o código, uma vez que é acoplado ao documento.
* ✅ Maior perfomance
	* Por se tratar de uma tag dentro do próprio documento, o navegador não precisa fazer uma requisição para o arquivo de estilos, no caso do arquivo externo, uma vez que o bloco de código ja esta presente no documento. Dessa forma é reduzido o delay da busca do arquivo CSS.
#### Inline
Aplica a regra de estilo na própria tag através do atributo `style`. Essa prática é a menos recomendada, pois não há flexibilidade de uso
```HTML
<body>
	<h1 style="color: red;">
		Teste
	</h1>
</body>

```

## Dinâmica de processamento
![[Pasted image 20240312233152.png]]