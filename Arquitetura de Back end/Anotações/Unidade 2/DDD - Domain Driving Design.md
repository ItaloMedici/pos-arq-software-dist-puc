 Abordagem para o desenvolvimento de software que enfatiza a importância do domínio central e da lógica do domínio.

O objetivo do DDD é criar sistemas ideias de objetos por meio de uma colaboração entre especialistas técnicos e de domínio para refinar iterativamente um modelo conceitual.

![[Pasted image 20240514221119.png]]

* DDD desconhece a infraestrutura
* DDD é puramente para backend

## Camada de Domínio

Responsável por representar conceitos, informações e situações referentes aos negócios.

O estado que reflete a situação de negócios é controlado e usado aqui, embora os detalhes técnicos sobre como armazena-lo sejam delegados à infraestrutura.

Essa camada é a essência de negócio do software sendo construído.

## Camada de Infraestrutura

Camada do SQL

Mantém a lógica técnica do produto, tais como persistência, segurança e outros temas técnicos.

Organiza os repositórios com a lógica específica de persistência de dados.
##  Camada de Serviço

Fornece uma visão dos serviços da aplicação.

Aqui são implantadas fluxos de trabalho e regras globais ao sistema

Essa camada também usa o domínio para persistir informações contra os banco de dados.

## Camadas de Aplicação

Camada de aplicação responsável pelo projeto principal. Aqui são implementados os controladores e a exposição de APIs

Tem a função de receber todas as requisições e direciona-las a algum serviço para executar uma determinada ação.

## Estrutura simplificada de pastas

![[Pasted image 20240514222003.png]]