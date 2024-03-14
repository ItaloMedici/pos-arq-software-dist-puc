#framework 

Framework web pensado para desenvolver aplicações front-end de ponta-a-ponta. O Angular possui todas funcionalidade internas necessárias para o desenvolvimento de uma aplicação, sem a necessidade de instalar pacotes terceiros. Dentre essas funcionalidades conseguimos destacar:
* Sistema de rotas
* Arquitetura e organização de pastas já estabelecida
* Sugere o uso dos Services para consultas a APIs externas
## Características
* Utiliza a linguagem tipada (typescript)
* Por ter uma base de funcionalidades internas robusta, permite ao desenvolvedor preocupar somente com a lógica de negócio
* Possui uma familiaridade com linguagens back-end (C#, Java e etc.), por conta de seus padrões de desenvolvimento também possuir bases em OO, `Decoretors`, `Annotation` entre outros.

## Aspectos Técnicos
O angular vem com um pacote chamado `angular-cli` que é um utilitário para a criação de partes da aplicação, permitindo criar componentes, serviços, modulos e diretivas através de uma linha de comando.

```bash
ng generate component my-component
```

```bash
ng g c my-component
```

## Pontos de atenção
* Em comparação com outros frameworks, o Angular necessita de mais linhas de código escritas para realizar o mesmo trabalho que outros.
* A curva de aprendizado pode ser maior para pessoas que conhecem somente front-end, uma vez que esse framework possui alguns conceitos também adotados no backend.
* É necessário aprender a utilizar o angular-cli
* É necessário aprender muitos conceitos core do framework, entre eles:
	* Componentes
	* Diretivas
	* Módulos
	* Serviços
	* Programação reativa com RxJs (Observables, subscribers, ...)
	* Injeção de dependências
	* HttpClient
## Casos de uso mais comuns
* Aplicações corporativas (ERP, Dashboards...)
* Aplicações de grande porte em geral
* Utilizada por times com mais familiaridade em linguagens server-side tipadas (Java, C#) e com pouco conhecimento em JS

## Comunidade
* Possui uma comunidade forte
* É mantido pelo time da Google

## Exemplo
[Code Sand Box](https://codesandbox.io/p/sandbox/angular-demo-forked-3v3mz7?file=/src/index.html:16,1)