#arquitetura 

*Resumo: Conseguir separar os front-ends em pequenos serviços separados por modulos, como micro-services*

> [!Para ler]
> https://martinfowler.com/articles/micro-frontends.html
> 

## Características
* Maior <mark class="hltr-yellow">independência</mark> entre os módulos
* Arquitetura mais <mark class="hltr-yellow">agnóstica a frameworks</mark>
* Lógica pulverizada em <mark class="hltr-yellow">vários projetos</mark>
* Pipeline de build, test e deploys mais rápida
* Assim como a arquitetura de micro serviços, adiciona uma <mark class="hltr-yellow">complexidade a mais</mark> no projeto
![[Pasted image 20240318235146.png]]

## Definições
* Baixo ou nenhum acoplamento
* Alta coesão
* Não deve assumir responsabilidades de outro micro frontend
* Não deve interferir ou ser interferido por outro micro front
* Base de código independente
* Pipelines e deploys separados e independentes

## Benefícios
* Modernização da aplicação sem a necessidade de jogar tudo fora
* Aplicações agnóstica de novas tecnologias
* Possibilidade de migração gradativa do código legado;
* Pipeline de build, teste e deploys mais rápida e independente.

## Formas de implementação

### Implementação em tempo de build
Projetos como pacotes npm

```json
{
	"name": "org/project",
	dependecies: {
		"org/front-1": "...",
		"org/front-2": "...",
		"org/front-3": "...",
	}
}
```

* ✅ ~~Baixo ou nenhum acoplamento~~
* ✅ ~~Alta coesão~~
* ✅ ~~Não deve assumir responsabilidades de outro micro frontend~~
* ✅ ~~Não deve interferir ou ser interferido por outro micro front~~
* ✅ ~~Base de código independente~~
* 🟨 Pipelines e deploys separados e independentes
	* Depende de atualizar cada projeto quando sair uma atualização em algum projeto front

### Integração por funções JavaScript

```html
<script src="https://browse.example.com/bundle.js"></script>
<script src="https://order.example.com/bundle.js"></script>
<script src="https://profile.example.com/bundle.js"></script>

<div id="micro-frontend-root"></div>

<script type="text/javascript">
	// These global functions are attached to window by the above scripts
	const microFrontendsByRoute = {
		'/': window.renderBrowseRestaurants,
		'/order-food': window.renderOrderFood,
		'/user-profile': window.renderUserProfile,
	}
	
	const renderFunction = microFrontendsByRoute[window.location.pathname];
	
	// Having determined the entry-point function, we now call it,
	// giving it the ID of the element where it should render itself
	renderFunction('micro-frontend-root'):
</script>
```

* ✅ ~~Baixo ou nenhum acoplamento~~
* ✅ ~~Alta coesão~~
* ✅ ~~Não deve assumir responsabilidades de outro micro frontend~~
* ✅ ~~Não deve interferir ou ser interferido por outro micro front~~
* ✅ ~~Base de código independente~~
* ✅ ~~Pipelines e deploys separados e independentes~~
### Integração por web components

```html
<script src="https!//about.project.com/bundle.js"></script>
<script src="https://products.project.com/bundle.js"></script>

// /about page

<div id="container">
	<about-micro-frontend></about-micro-frontend>
</div>

// /products page

<div id="container">
	<products-micro-frontend></products-micro-frontend>
</div>
```

* ✅ ~~Baixo ou nenhum acoplamento~~
* ✅ ~~Alta coesão~~
* ✅ ~~Não deve assumir responsabilidades de outro micro frontend~~
* ✅ ~~Não deve interferir ou ser interferido por outro micro front~~
* ✅ ~~Base de código independente~~
* ✅ ~~Pipelines e deploys separados e independentes~~

### Integração via iframes

```html
// /about page
<div id="container">
	<iframe src="https://about.project.com"></iframe>
</div>

// /products page
<div id="container">
	<iframe src="https://products.project.com"></iframe>
</div>
```

* ✅ ~~Baixo ou nenhum acoplamento~~
* ✅ ~~Alta coesão~~
* ✅ ~~Não deve assumir responsabilidades de outro micro frontend~~
* ✅ ~~Não deve interferir ou ser interferido por outro micro front~~
* ✅ ~~Base de código independente~~
* ✅ ~~Pipelines e deploys separados e independentes~~

## Comunicação entre os Micro Fronts

*  Utilizando aplicação "Satélite"
![[Pasted image 20240319224801.png]]
### Integração via iframes - Proxies
* Window post message proxy
* Iframe Message Proxy
