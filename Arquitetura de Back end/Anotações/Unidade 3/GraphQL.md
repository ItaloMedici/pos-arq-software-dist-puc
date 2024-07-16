*Linguagem de consulta para APIs.* 

GraphQL permite que os clientes definam a estrutura de dados necessários e que o servidor retorna exatamente essa estrutura.

![[Pasted image 20240611205439.png]]

## Vantagens

As APIs REST e RPC muitas vezes acabam respondendo com dados que clientes podem nunca utilizar.

Com o GraphQL, como os clientes podem especificar exatamente o que precisam os tamanhos dos pacotes podem ser menores.

As consultas da GraphQL retorna, resultados previsíveis, dando aos clientes controle sobre os dados que são devolvidos.

O GraphQL permite que os clientes aninhem consultas e busquem dados de recursos em uma única solicitação. Sem o GraphQL, isso pode exigir várias chamadas HTTP para o servidor.

Isso significa que aplicativos móveis usando GraphQL podem ser mais rápidos, mesmo em conexões lentas. 

Podemos adicionar novos campos na API sem afetar as consultas existentes. Da mesma forma, depreciar campos existentes é mais fácil.

Ao fazer ananálise de log, um provedor de API pode descobrir queis clientes estão usando um campo. Podendo esconder campos preteridos de ferramentas e removê-los quando nenhum cliente os estiver usando.

Com as APIs REST e RPC, é mais difícil descobrir quais clientes estão usando um campo preterido, dificultando a remoção.

Resumo:
- Endpoint único ao invés de diversas entradas como o padrão REST
- Independente de linguagem, protocolo ou framework
- Maior controle do cliente via linguagem de conulta (Graph Query Language)
- Acabar com o Overfetching e o Underfetching
- Redução do traffego de dados e o número de requisições
- Reduz a necessidade de manutenções de uma API

## Desvantagens

Projeto do servidor GraphQL pode ser complexo para esquemas de dados muito complexos.

Custo do processamento de operações complexas de atualizações (Mutations) pode ser um problema na escalabilidade do servidor. 

## Casos de uso | Exemplos

- Aplicações com diferentes clientes requerendo de diferentes conjuntos de dados

## Conceitos Importantes

### Schemas

Especificação de uma API GraphQL, escrita em uma linguagem denominada Schema Definition Language (SDL)

Estabelece os tipos de dados possíveis de serem em uma API baseada em GraphQL.

Define as operações de consulta (Queries) e alterações (Mutations) disponíveis no serviço que oferece a API GraphQL

```GraphQL
type User {
	id: ID!
	name: String!
	email: String!
}

type Query {
	getUser(id: ID): User
	getAllUsers: [User]
}

type Mutation {
	createUser(name: String!, email: String!): User
	updateUser(id: ID!, name: String, email: String): User
	deleteUser(id: ID!): ID
}
```

### Tipo Objeto

`Type` define um objeto, o elemento básico do Schema GraphQL

### Tipos escalares

- `String`: Propriedade baseada em texto (UTF-8)\
- `Integer`: Propriedades numéricas
- `Float`: Para propriedades numéricas com uma parte decimal
- `Boolean`: Para propriedades binárias de um objeto (true ou false)
- `Unic Identifiers (ID)`: Descreve um identificador único para o objeto. São serializadas com strings, porém possuem tratamento diferenciado.

### Tipos enumerados

Tipo especial restrito a um conjunto particular de valores

```
enum Status {
	ACTIVE,
	INACTIVE
}
```
### Listas

Definidas por meio do modificador de colchetes \[ e ]

### Tipo Query

Operações disponíveis em uma API GraphQL que permitem obter dados do servidor

```
type Query {
	getUser(id: ID): User
	getAllUsers: [User]
}
```

### Mutation

Operações disponíveis em uma API GraphQL que permitem modificar os dados no servidor e recuperar os dados modificados.

```
type Mutation {
	createUser(name: String!, email: String!): User
	updateUser(id: ID!, name: String, email: String): User
	deleteUser(id: ID!): ID
}
```

### Resolvers

Funções que implementam a lógica por traz das queries e mutations definidas no Schema de um serviço.

Cada campo no Schema, deve ter um resolver correspondente que implementa o que é necessário para buscar os dados ou executar ações relacionadas.

```js
const resolvers = {
	Query: {
		getAllUsers: () => users,
		getUser: (_, { id }) => users.find(user => user.id === id),
	},
	Mutation: {
		createUser: (_, { name, email, password }) => {
			const user = { id: genID(), name, email, password }
			users.push(user)
			return user
		}
	}
}
```

## Arquitetura

![[Pasted image 20240617212130.png]]
