#framework

*"Vue is designed from the ground up to be incrementally adoptable".* 

Framework web que foi desenvolvido pensando em ser uma ferramenta utilizada para iniciar uma aplicação do zero quanto ser utilizado em uma aplicação ja existente. 
Possui uma diretiva voltada a componentes e não vem com muitas funcionalidades internas, somente o necessário para criação dos componentes.

## Arquitetura
* Não foi criado para desenvolvimento de SPAs
* Somente possível desenvolver SPAs instalando libs externas:
	* **Vue-router:** possibilita o gerenciamento de rotas
	* **Vuex:** possibilita o gerenciamento de estados.
* Possui certa familiaridade com o Angular, por conta de também utilizar a diretiva de view, controller e model
## Aspectos técnicos
* Possuir um formato de arquivo próprio `.vue`
* Configuração inicial utiliza Javascript puro
* Permite a escrita de CSS com escopo de forma nativa
* Permite a configuração para aceitar Typescript 
* Todo componente é desenvolvido em um único arquivo que concentra o HTML, JavaScript e CSS.

## Comunidade e evolução
Foi um framework desenvolvido e mantido pela própria comunidade, possuindo vários ferramentas disponíveis para auxiliar na produtividade do desenvolvimento. 

## Pontos de atenção
* Não possui nenhuma definição de arquitetura da aplicação, como a organização de pastas. Ficando a cargo do desenvolvedor definir o seu melhor padrão
* Arquivos de componentes podem crescer exponencialmente. Por isso a necessidade de quebrar componentes em pequenas partes, o máximo possível

## Casos de uso comuns
* Desenvolvimento de bibliotecas de componentes *cross-framework* (Design systems, bibliotecas UI)
*   de aplicações ja existentes
* Criação de aplicações de pequeno porte

## Exemplos
[Code Sandbox](https://codesandbox.io/p/sandbox/vue-demo-forked-8f3v87)