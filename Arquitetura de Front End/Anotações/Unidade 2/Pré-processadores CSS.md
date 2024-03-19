#css
Um **pré-processador** possui a capacidade de adicionar novos recursos na escrita de estilos.
## Características
* Permite gerar CSS baseado na linguagem do pré-processador
* Três principais ferramentas com o mesmo propósito: 
	* SASS
	* LESS
	* Stylus

## Recursos

### Herança
Pré-processadores permitem uma estilização de herança no mesmo bloco de código.
* Antes
```CSS 
.parent {
	background: red;
}

.parent .child {
	color: black;
}
```
* Depois
``` SCSS
.parent {
	background: red;
	
	.child {
		color: black;
	}
}
```

### Variáveis
Possibilita a criação de variáveis no CSS
```LESS
@link-color: #428bca; 
@link-color-hover: darken(@link-color, 10%); 

a { 
	color: @link-color; 
	
	&:hover { 
		color: @link-color-hover; 
	}
} 
```

### Mixins
São blocos de código que podem ser reutilizados, como funções.
```SCSS
@mixin transform($property) {
	-webkit-transform: $property;
	-ms-transform: $property;
	transform: $property;
}

.box {
	@include transform(rotate(40deg));
}
```

## Pontos
* Permite ter uma boa escalabilidade na criação de recursos compartilhados (cores, fontes, backgrounds...)
* Flexibilidade na criação de `mixins`: possibilidade de reutilizar muito código
* Complexidade: necessita de alguma ferramenta de build para interpretar os pré-processadores.