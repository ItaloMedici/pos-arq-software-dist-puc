É Forma de organizar as grandes camadas lógicas e incluí-las em camadas físicas. 

Normalmente vemos 4 camadas lógicas, sendo elas:
* Presentation Layer
* Business Layer
* Service Layer
* Persistence Layer
* DatabaseLayer

## Benefícios da Arquitetura em Camadas

### Modularidade

Quando separamos regras lógicas em camadas, podemos criar módulos distintos que podem ser desenvolvidos, testados e mantidos de forma independente. Essa modularidade <mark class="hltr-yellow">aumenta a reutilização de código e simplifica a manutenção do sistema</mark>.

### Escalabilidade

Através do desacoplamento do sistema em camadas, podemos dimensionar as camadas independente de camadas individuais, permitindo melhor utilização de recursos e otimização de desempenho.

## Manutenibilidade

Com uma clara separação de preocupações lógicas, fica mais <mark class="hltr-yellow">fácil entender, modificar e manter a base de código</mark>. Essa separação também promove consistência no design e desenvolvimento, reduzindo o potencial de erros. 

## Práticas

### Princípio de Inversão de Dependência

Os <mark class="hltr-yellow">módulos de nível superior não devem depender dos módulos de nível inferior,</mark> mas ambos devem depender de abstrações

## Princípio Aberto/Fechado

Códigos prontos não podem ser modificados, e sim extendidos. Reduzindo o risco de introduzir novos defeitos.

## Exercícios
[[Exercícios Baseados em Camadas]]