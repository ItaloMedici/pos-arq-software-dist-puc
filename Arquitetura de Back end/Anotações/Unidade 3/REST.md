Transferência de Estado Representacional (REST) é um paradigma baseado no conceito central de recursos. 

Um recurso é uma entidade da regra de negócio que pode ser identificada, nomeada ou tratada na web. 

As APIs REST expõe dados como recursos e usam métodos do [[Protocolo HTTP]] padrão para representar transações como Criar, Ler, Atualizar e Excluir (CRUD) contra esses recursos.

![[Pasted image 20240611205322.png]]

## Uso de métodos HTTP

Métodos HTTP como `GET`, `POST`, `UPDATE` e `DELETE` informam o servidor sobre a ação a ser realizada.

Cada método HTTP fornece uma funcionalidade diferente, sendo:

- `POST`: Utilizado na maioria dos casos para criar novos recursos.
- `GET`: Utilizado para ler recursos. Requisições `GET` nunca mudam o estado do recurso. Elas não têm efeitos colaterais.
- `PUT` e `PATCH`: Utilizado para atualização. Usa-se o `PUT` para substituir um recurso e `PATCH` para atualizações parciais para os recursos existentes. o `PUT` também é idempotente. 
- `DELETE`: Utilizado para excluir recursos existentes. É idempotente.

## Nomenclatura

O padrão sempre vai variar do definido pelo padrão aplicado no time. Porém existem algumas boas e má práticas em relação as nomenclaturas de rotas REST.

Para cada recurso, duas URLs são geralmente implementadas:
* Uma para a coleção de recursos como `/usuarios`
* Uma para um elemento em específico como `/usuarios/123` 

Nomes são usados ao invés de verbos. Por exemplo, ao invés de definir `/lerInformacoesUsuario/123`, use `/usuarios/123`

## Códigos de Resposta

Os códigos de status de resposta do HTTP padrão são devolvidos pelo servidor indicando sucesso ou falha. 

Existem vários códigos de resposta, porém podemos dividi-los em faixas semânticas, sendo: 
- `2xx`: Indicam sucesso
- `3xx`: Indicam que um recurso se moveu (redirect)
- `4xx`: Indicam um erro do lado do cliente
- `5xx`: Indicam um erro do lado do servidor

## Formatos de resposta

As APIs REST podem de devolver respostas JSON ou XML. Devido à sua simplicidade e facilidade o uso de JavaScript, o JSON é o padrão de APIs modernas.

O XML e outros formatos ainda podem ser suportados para facilitar a adoção de clientes que ja estão trabalhando com esses formatos usando APIS semelhantes.

No Brasil, o XML é comum em APIs do governo, como NFe ou E-social

## Casos de uso | Exemplos
- APIs de mídia social, onde os clientes acessam dados de usuário e publicações.
- APIs de serviço da Web.
	- Ex: GitHub Rest API

## Princípios de Design

### Definição do protocolo HTTP

Utilizar os métodos HTTP de maneira clara do seu propósito semântico.

- `GET`: Recuperar recurso (SELECT)
- `POST`: Criar recurso (INSERT)
- `PUT` | `PATCH`: Alterar recurso (UPDATE)
- `DELETE`: Deletar recurso (DELETE)
- `OPTIONS`: Lista as operações de um recurso