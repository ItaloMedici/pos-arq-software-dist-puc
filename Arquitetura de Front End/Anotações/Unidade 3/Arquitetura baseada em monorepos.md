#arquitetura 

*Resumo: Um único repositório para múltiplos pacotes*

> [!NOTE]
> *Monorepo != monolito*

## Características

* Conceito arquitetural que propõe <mark class="hltr-yellow">um repositório para múltiplos pacotes</mark>
* Cada <mark class="hltr-yellow">pacote representa um projeto </mark>(seja um micro frontend ou um módulo)
* Isolamento de código com a possibilidade de <mark class="hltr-yellow">dependência entre pacotes</mark>;
* Controle de versão tanto do repositório quanto dos pacotes;
* Refatoração fácil de configurações globais e compartilhadas entre os pacotes.

![[Pasted image 20240319235424.png]]

## Ferramentas
* Lerna
* Yarn Workspaces

### Lerna
* `lerna init`: cria um novo repositório com configurações inicias
* `lerna publish`: cria uma release dos pacotes atualizados tanto no git quanto no npm
* `lerna run [script]`: roda o script espefificado em todos os pacotes que contém esse script configurado *(ex: lerna run start)*