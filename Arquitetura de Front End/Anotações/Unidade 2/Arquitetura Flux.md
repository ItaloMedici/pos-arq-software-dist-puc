#arquitetura 
*Resumo: Sistema de gerenciamento de estados*

![[Pasted image 20240318224809.png]]

## Store
* Armazena o estado de toda aplicação
* Estado é atualizado a partir de algum <mark class="hltr-yellow">dispatcher</mark>
* Aplicação possui <mark class="hltr-yellow">apenas uma única store</mark>
* Comparada a um "estado global"

## Action
* Conteúdos enviados da aplicação para a store
* Descreve <mark class="hltr-yellow">o que</mark> acontece
* Precisa da propriedade `type`
* Apenas uma função que retorna um objeto javascript

```js
const SET_USER = 'SET_USER';

const setUser => user => ({
	type: SET_USER,
	payload: user
})
```

## Reducers
* Descrevem <mark class="hltr-yellow">como</mark> as alterações acontecem na store e como os dados são enviados
* Recebe uma <mark class="hltr-yellow">action como argumento</mark>
* Funções puras (não alteram nada diretamente fora do seu escopo)

```js
import { SET_USER } from '../actions';

function user(state = {}, action) {
	switch(action.type) {
		case SET_USER: 
			return {
				...state,
				user: action.payload
			}
		default: 
			return state;
	}
}
```
