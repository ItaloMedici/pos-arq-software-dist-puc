#bundler 

## Características
* É o bundler mais utilizado pela comunidade
* Utilizado por Angular, Vue e React
* Gera automaticamente um <mark class="hltr-yellow">grafo de dependências</mark> entre os arquivos escritos
* Utiliza o conceito *"convention over configuration"* - Convenção ao invés de configuração
* Por convenção, seguindo a estrutura a seguir, basta rodar o comando "`webpack`" na linha de comando e um arquivo dist/bundle.js será gerado

## Loaders
É um conceito que possibilita adicionar plugins ao Pipeline de build do webpack.
* sass-loader: é o loader responsável por compilar arquivos sass em css;