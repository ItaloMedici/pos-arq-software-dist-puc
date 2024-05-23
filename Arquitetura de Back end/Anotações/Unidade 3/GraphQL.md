*Linguagem de consulta para APIs.* 

GraphQL permite que os clientes definam a estrutura de dados necessários e que o servidor retorna exatamente essa estrutura.

## Vantagens

As APIs REST e RPC muitas vezes acabam respondendo com dados que clientes podem nunca utilizar.

Com o GraphQL, como os clientes podem especificar exatamente o que precisam os tamanhos dos pacotes podem ser menores.

As consultas da GraphQL retorna, resultados previsíveis, dando aos clientes controle sobre os dados que são devolvidos.

O GraphQL permite que os clientes aninhem consultas e busquem dados de recursos em uma única solicitação. Sem o GraphQL, isso pode exigir várias chamadas HTTP para o servidor.

Isso significa que aplicativos móveis usando GraphQL podem ser mais rápidos, mesmo em conexões lentas. 

Podemos adicionar novos campos na API sem afetar as consultas existentes. Da mesma forma, depreciar campos existentes é mais fácil.

Ao fazer ananálise de log, um provedor de API pode descobrir queis clientes estão usando um campo. Podendo esconder campos preteridos de ferramentas e removê-los quando nenhum cliente os estiver usando.

Com as APIs REST e RPC, é mais difícil descobrir quais clientes estão usando um campo preterido, dificultando a remoção.

## Desvantagens

Projeto do servidor GraphQL pode ser complexo para esquemas de dados muito complexos.

Custo do processamento de operações complexas de atualizações (Mutations) pode ser um problema na escalabilidade do servidor. 