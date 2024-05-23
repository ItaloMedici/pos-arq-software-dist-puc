## Objetivos
#### [[Arquitetura Limpa]] 
Foca na organização do código para criar sistemas escaláveis, mantendo a separação e facilitando a manutenção e evolução do software.
#### [[DDD - Domain Driving Design]]
Foca na modelagem do domínio do problema, alinhando o design do software com o conhecimento do negócio e a linguagem utilizada pelos especialistas no domínio.

## Princípios
#### Arquitetura Limpa: 
Baseia-se em princípios de design de software, como [[SOLID]] e [[Inversão de dependência]]. O código é dividido em camadas, sendo a camada mais interna responsável pela lógica de negócio e as camadas externas responsáveis pela comunicação com o mundo externo (UI, banco de dados, etc)
#### DDD
Baseia-se e, princípios específicos para a modelagem de domínio, como Entidades, Agregados, Repositórios, Serviços de Domínio e Objetos de Valor. O DDD também promove o uso de uma linguagem ubíqua, compartilhada para desenvolvedores, e especialistas no domínio para garantir uma compreensão comum do problema.

## Abordagem

#### Arquitetura Limpa
Foco é na organização e separação do código em diferentes camadas e componentes. A arquitetura Limpa tem um padrão de camadas concêntricas:
* Entidades: Regras de Negócio
* Casos de Uso: Interação com a lógica de negócio
* Adaptadores: Conversão de formatos
* Estruturas: Integração com mundo externo

#### DDD
Foco na modelagem do domínio, criando um modelo rico e expressivo que reflita o conhecimento do negócio. O DDD também se preocupa com a divisão do sistema em contextos limitados, que são partes do domínio com limites bem definidos, facilitando o desenvolvimento manutenção.