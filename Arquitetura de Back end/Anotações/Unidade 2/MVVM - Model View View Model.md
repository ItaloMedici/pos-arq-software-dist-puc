Model View View Modal, esse padrão possui a base do MVC, removendo a camada de controller para a View Modal.

Esse padrão foi responsável pela popularidade do JavaScript e os frameworks web como Angular, React e Vue

## Visão

Esta camada será responsável por receber e responder dos dados ao cliente, responsável por realizar a consulta dos dados no ViewModel

### View Model

Faz a requisição de rede ao model para o processamento dos dados. Essa camada pode ser como um cache para a View, caso exista os dados na camada não será necessário realizar uma chamada de rede para processar os dados.

