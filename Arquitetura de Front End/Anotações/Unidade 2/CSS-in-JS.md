#css 
## Conceitos
* Formato de escrita de <mark class="hltr-yellow">CSS em arquivos Javascript</mark>
* Classes CSS podem ser escritos em formato de função, que são traduzidos em componentes posteriormente.
* **CSS dinâmico**: uma classe pode se comportar de forma diferente de acordo com os parâmetros que são passados

## Exemplos
Componente criado utilizando a lib styled-components

```js
const Button = styled.button`
	background: ${props => props.primary ? "green" : "white"};
	color: ${props => props.primary ? "white" : "green"};
`;
```

```tsx
<div>
	<Button primary>Hello</Button>
</div>
```

## Suporte
Suporte para poucos frameworks, React concentra a maioria das opções
* React: [styled-components](https://styled-components.com/) e [emotion](https://emotion.sh/docs/introduction)
* Vue: [Vue-styled-components](https://github.com/styled-components/vue-styled-components)
* Angular: possui um mecanismo próprio - [Component Styles](https://angular.io/guide/component-styles)

## Benefícios
* Internamente a lib gera um hash para cada classe de estilo, dessa forma <mark class="hltr-yellow">não há colisão de classes </mark>
* Possui um work-around para garantir funcionamento de css em todos browsers.