
**Site Reability Engineering (SRE):** é um time que vai tratar da confiabilidade das operações em TI

Usam software como uma ferramenta para gerenciar sistemas, solucionar problemas e automatizar tarefas operacionais e, padronização e automação são dois componentes importantes do modelo de SRE

Como o DevOps, a SRE tem como foco a cultura e os relacionamentos e tem como objetivo operação do desenvolvimento o para entrega de serviços

## Carga de trabalho ou Workloads
São programas executados em uma nuvem provada, ou mainframe ou em uma nuvem publica, e em nuvem, remete mais do que várias VM executando em unidades computacionais.

Remos envolvido neste conceito capacidades de processamento, interação com storage interconexão com redes internas e externas, isolamento de unidades de processamento e operações de automação

## Cuidados a Analisar
A dimensão Arquitetura de Aplicações passa a ser fundamental neste tipo de análise que envolve é a integração corporativa

Os *Cloud Service Providers* (CSPs) oferecem modelos de computação, networking, storage, segurança e até plataforma das mais distintas formas.

Isto acontece porque cada carga de trabalho tem a necessidade de isolamento, tolerância a falhas, operar e escalar conforme a demanda e de consumir recursos computacionais da forma mais otimizada.

> [!Relembrando]
> CSPs se paga pelo que utiliza, para o bem e para o mal também.

## Classificações de Workloads

### Workload Estático

A aplicação apresenta um perfil cuja previsão da carga de trabalho é <mark class="hltr-yellow">sempre a mesma da carga executada</mark> e, como não possui crescimento e nem decrescimento de demanda a tendência é que este tipo de carga não tire muito benefício de ambiente pago por uso por se manter <mark class="hltr-yellow">sempre constante</mark>.

![[Pasted image 20240415215706.png]]

### Workload Periódico 

É o perfil de aplicações mais presente no nosso dia a dia e visualizando o consumo, são sistemas que ficam aguardando parte do período de disponibilização de recursos e que <mark class="hltr-yellow">somente quando necessário lançam mão de processamento </mark><mark class="hltr-yellow">otimizando custos de utilização</mark>.

![[Pasted image 20240415220117.png]]

### Workload "Once-in-life"

A repetição de picos de consumo ocorre em e<mark class="hltr-yellow">ventos conhecidos</mark> (como o Natal, por exemplo) e possibilita que a <mark class="hltr-yellow">preparação de recursos seja planejada e alocada</mark> muitas vezes <mark class="hltr-yellow">manual e dirigida</mark> nos recursos da nuvem.

![[Pasted image 20240415220531.png]]

### Work Imprevisível

É um tipo de pico demandado por <mark class="hltr-yellow">situações não previstas</mark> de processamento <mark class="hltr-yellow">(como ataques a websites)</mark> e neste caso existe alocação/desalocação de recursos de nuvem de forma <mark class="hltr-yellow">automatizada e com alertas para apontar anomalias</mark>.

![[Pasted image 20240415220654.png]]

### Workload de Mudança Contínua

Este tipo de carga está <mark class="hltr-yellow">propensa a ser transformado</mark> em outra aplicação ou <mark class="hltr-yellow">crescerá conforme a demanda de utilização</mark>.
Observe que a característica de crescimento difere em cada tipo de workload.

![[Pasted image 20240415220838.png]]

### Outros

![[Pasted image 20240415220936.png]]


| Tipo de workload          | Foco                                                                     | Porque Levar para Cloud                                                                                                                        |
| ------------------------- | ------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| High-performance workload | Tem foco científico ou técnico.                                          | Pode construir rapidamente grandes ambientes de computação sem<br><br>construir no local.                                                      |
| Back-end workloads        | Atenda às necessidades do front-end Saas.                                | Computar cargas de trabalho intensivas que podem usar recursos mais baratos em tempos de menor demanda.                                        |
| Database workload         | É altamente ajustado às necessidades do aplicativo.                      | Fácil acesso a uma variedade de tipos de banco de dados para suportar uma variedade de dados, incluindo dados estruturados e não estruturados. |
| SaaS workload             | Gerencia as interações do usuário, comunica-se com serviços de back-end. | Acesso fácil para os clientes começarem a usar e expandir.                                                                                     |
| Transaction al workload   | Concentra-se em grande volume de transações em tempo real.               | Acesso ao armazenamento escalável e aproveite as ferramentas de análise em nuvem.                                                              |
| Analytic workload         | Afeta grandes quantidades de dados para tomada de decisão.               | Acesso a hardware especializado, como GPUs, e computação e armazenamento escaláveis.                                                           |
| Batch workload            | Processamento repetitivo de grandes volumes de dados em segundo plano.   | Acesso a grande quantidade de ferramentas de armazenamento e automação.                                                                        |
## Oque não levar para nuvem

**Aplicativos grandes e monolíticos que foram projetados para servidores físicos** não poderão aproveitar de recursos da nuvem, como dimensionamento horizontal para fornecer um melhor desempenho.

**Cargas de trabalho que precisam de armazenamento de alto desempenho**: Com os dados precisam ser acessados muito rapidamente, essas cargas de trabalho podem não ser adequadas para à nuvem, onde você depende da internet para obter velocidade de rede.

**Carga de trabalho de aplicativos que exigem latência muito baixa**: Cargas de trabalho legadas não foram arquitetadas para serem executadas em um ambiente de computação distribuído, principalmente web ou cliente servidor.

Aplicativos regulamentados que exigem segurança e auditoria

