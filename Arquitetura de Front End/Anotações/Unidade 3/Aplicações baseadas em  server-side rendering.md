#SSR 

## Contexto
* Antes de 2010, todas aplicações web dinâmicas eram server-side randered:
	* PHP
	* ASP.NET MVC
	* Java Server Pages (JSP

## Aplicações SSR
* Em cada uma das requisições, o<mark class="hltr-yellow"> servidor é o responsável por devolver a página</mark> completa ao usuário, pois ela já foi pré-processada;
* Regras de negócio na mesma base de código da camada de apresentação;
* Roteamento de URLs direto do servidor
* ![[Pasted image 20240325195124.png]]

## Vantagens ✅

* Search Engine Optimization SEO: páginas possuem o HTML semântico nos resultados de busca:
	* O servidor ja envia a página já carregada, oque facilita para buscadores entenderem o conteúdo da página
* Perfomance e Time To Interactive (TTI)

## Next.js: SSR + React

* Aplicação é pre-rederizada no servidor, somente pela primeira vez;
* Navegação subsequentes utilizam o "efeito SPA"
* Melhor desempenho em mecanismos de busca
* Possibilidade de usar todos os conceitos de componentização presentes no React
* Sistema de rotas baseado na estrutura de pastas

## Gatsby
* JAMStack: Javascript, API e Markup
* Utilização de SSR para criação de SSG: Static Site Generators
* Utiliza o React para criação das páginas e componentes
* Principais linhas de utilização
	* Criação de landing pages
	* Criação de blogs pessoais
