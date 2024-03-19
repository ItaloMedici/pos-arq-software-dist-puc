 #arquitetura 

## Características
* Projetos estão sempre em evolução e crescimento
* Encontrar uma arquitetura ideal logo de cara nem sempre é possível
* **Arquitetura evolutiva**: Projeto deve ser <mark class="hltr-yellow">escalável e flexível </mark>o suficiente para poder sofrer alterações no futuro *(last responsible moment)*
* **Objetivo**: Encontrar uma arquitetura que seja agnóstica a frameworks e que possa ser aplicada em qualquer stack
* Arquiteturas podem (e devem) ser adaptadas para pequenos e grandes projetos;

## Divisão de uma aplicação em módulos

### UI components
Concentra todos componentes com lógica visual e interatividade do usuário, podendo ser genérica por modulo. 

Exemplos:
* Botões
* Listas
* Seletores de Data
* Inputs de texto
* Cabeçalhos

### Page Componentes
Componentes que representam uma tela e estão associados a uma rota.
Exemplo:
* Home
* Página de Contato
* Página de configurações
* Página de login
  
![[Pasted image 20240318221958.png]]

### Application Routes
* Arquivo que contém todas as rotas daquele módulo
* Toda nova rota (URL) deve estar associado a um componente

### Api Client/Services
* Necessidade de desacoplar a lógica de uma chamada de APIs da lógica dos componentes
* Ponto <mark class="hltr-yellow">único de contato entre a aplicação e API externa</mark>

### State Management
* Compartilhamento de estados comuns entre os componentes, exemplo:
	* Dados do usuário logado (token, sessão, dados de perfil)
	* Tema e design system (dark mode e etc)
	* Filtro de elementos visuais (ordenação por titulo, preço e etc)
* **SSOT**: Single Source of Truth
* Utilização da [[Arquitetura Flux]] para gerenciamento de estados como exemplo.
