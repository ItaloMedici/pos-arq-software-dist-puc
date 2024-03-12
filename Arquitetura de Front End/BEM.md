#css [Doc BEM](http://getbem.com/introduction)

Metodologia de organização do CSS, BEM aplica uma padronização do uso de css, dividindo em 3 partes 
### Block
São as entidades que possuem contexto sobre si mesma, exemplos:
`button`, `header`,  `input`
* Sintaxe: `block`

### Element
São as partes que não possuem contexto, e sim servem para dar semântica a um bloco
`menu item`, `list item`
* Sintaxe: `block block__elment`
* Ex.: `button button__submit`

### Modifier
Utilizado como uma flag para um bloco, dando significado de estado e comportamento
`disabled`, `success`, `checked`, `size big` 
* Sintaxe: `block block__elment--modifier`
* Ex.: `button button__submit--disabled

### Exemplos

```css
.button {
	background-image: black;
	font: 700 18px Helvetica, arial;
}

.button--state-success {
	color: #FFF;
	background: green;
}

.button--state-danger {
	color: red;
}
```

```HTML
<button class="button">
	Normal button
</button>
<button class="button button--state-success">
	Success button
</button>
<button class="button button--state-danger">
	Danger button
</button>
```

