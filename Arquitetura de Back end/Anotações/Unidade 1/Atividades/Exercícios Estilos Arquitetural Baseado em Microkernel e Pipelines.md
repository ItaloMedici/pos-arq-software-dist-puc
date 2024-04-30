#### O que é uma arquitetura de pipeline e quais são suas principais características?
   
   Arquitetura Pipeline faz o tratamento de dados através de mecanismos de ingestão de dados, por meio de uma sequencia de blocos micro processamentos alimentados por pipes que conectam as unidades

Resposta: 
	Uma arquitetura de pipeline é um modelo de processamento de dados em que as tarefas são dividas em estágios (filters) consecutivo, conectados por pipes e executados em paralelo. As principais caracteriscas dessa arquitetura incluem a divisão do processamento em estágios, o encadeamento de estáfios e a execução parela de tarefas em diferentes estágios.
   
#### Explique o conceito de "estágios" em uma arquitetura de pipeline e como eles  contribuem para o processamento paralelo.
   
   Eles servem para o enriquecimento dos dados ingeridos, podendo ajudar no paralelismo ao dividir o trabalho em micro-processamentos diferentes.
   
   Resposta:
	   Os estágios em uma arquitetura de pipeline<mark class="hltr-yellow"> são as etapas discretas pelas quais os dados passam durante o processamento</mark>. Cada estágio executa uma parte especifica do processamento e passa os resultados para o próximo estágio. Isso permite que várias <mark class="hltr-yellow">tarefas sejam executadas simultaneamente, melhorando a eficiência e o desempenho</mark>.

#### ﻿﻿﻿Quais são algumas das vantagens de se utilizar uma arquitetura de pipeline em sistemas de processamento de dados?
   
   A capacidade de paralelizar os processamentos em pequenas unidades.
   
   Resposta:
	   Algumas vantagens de utilizar uma arquitetura de pipelines incluem <mark class="hltr-yellow">maior eficiência no processamento</mark>,<mark class="hltr-yellow"> desempenho aprimorado, paralelismo</mark> e a possibilidade de <mark class="hltr-yellow">balanceamento de carga</mark> entre os estágios.
#### **Cite** e explique dois exemplos de aplicação prática de uma arquitetura de pipeline.

Aplicações de Mensageria

Resultado:
	CI/CD, utilizados para automatizar o processamento de desenvolvimento e implantação de software, e plataformas de análise de dados como Apache Kafka Streams, onde os dados são processados e transformados por meio de pipelines de processamento de fluxo.
  
   
#### O que é um microkernel e como ele difere de um kernel monolítico?
   
É a estilo arquitetural que permite a extensão da aplicação sem comprometer o código core, em projetos podendo ser de fora. Enquanto o kernel monolítico trabalha com alterações de dentro.

 Resposta:
	 Um <mark class="hltr-yellow">microkernel gerencia apenas as funções básicas</mark>, como gerenciamento de memória, agendamento de tarefas e comunicação entre processos. 
	  Ele difere de um kernel monolítico, que inclui a lógica para todas as funções do sistema operacional em um único componente.
#### Quais são as principais responsabilidades de um microkernel em um sistema operacional?
   
Prover serviços de acesso e comunicação do hardware à aplicações que necessitam de utilização.

Resposta:
	As principais responsabilidades de um microkernel são<mark class="hltr-yellow"> gerenciar a memória, o agendamento de tarefas e comunicação entre processos</mark>, enquanto outros componentes do sistema operacional são executados como processos separados no espaço do usuário.


#### Descreva a relação entre o microkernel e os processos em execução no espaço  do usuário.
   
?

Resposta:
	Na arquitetura de microkernel, os processos no espaço do usuário interagem com o microkernel por meio de mecanismos de comunicação entre processos. O microkernel fornece serviços essenciais para os processos e gerencia a comunicação e a coordenação entre eles.
   
 
   
#### Quais são as principais vantagens de uma arquitetura de microkernel em termos de modularidade e manutenção?
   
Extensão, pois permite novas implementações sejam acopladas ao core do sistema
Uma vez que não acessamos o núcleo para criar novas implementações diminuímos o risco de erros no código principal.

Respostas:
	Separação clara de responsabilidades, a facilidade de atualização e substituição de componentes individuais e a maior confiabilidade e segurança do sistema operacional.
#### Cite e explique um exemplo de aplicação prática de uma arquitetura de microkernel.
   
Sistema operacional, Sistema Android e Navegadores com Extensões
   
 Resposta:
	 Um exemplo de aplicação prática de uma arquitetura de microkernel em ERPs é o sistema SAP, que utiliza um núcleo central para gerenciar funções básicas e componentes modulares para funcionalidades especificas do negócio. No contexto do Google Chrome, a arquitetura baseada em microkernel é aplicada ao seu sistema de extensões, onde cada extensão funciona como um processo separado, garantindo isolamento e maior estabilidade.
   
#### Compare e contraste as arquiteturas de pipeline e microkernel. Em quais aspectos eles são semelhantes e em quais diferem?
    
São semelhantes no nivel de acoplamento, se precisarmos adicionar novos processamentos na lista de pipelines, basta somente adicionar a conexão, assim como em arquitetura microkernel, onde podemos acoplar um nova unidade.

Diferente da arquitetura de microkernel possui um código core principal, a arquitetura em pipeline não possui uma central de processamento, seu estilo e baseado em multiplas unidades de processamento.

Resposta:
	As arquiteturas de pipeline e microkernel compartilham algumas semelhanças, como a divisão de responsabilidades e a execução paralela de tarefas. No entanto, eles diferem em seu escopo e aplicação. A arquitetura de pipeline é mais adequada para processamento de dados e tarefas em que a paralização e a eficiência são cruciais, enquanto a arquitetura de microkernel se concentra no gerenciamento de funções básicas do sistema operacional e na comunicação entre processos. A arquitetura de pipeline lida com o processamento de dados em etapas, enquanto a arquitetura de microkernel e aplicada em contextos como o sistema operacionais (ex.: Linux ou QNX). ERPs e navegadores da web, como o Google Chrome, onde a modularidade e a manutenção e a confiabilidade são aspectos importantes. Ambas arquiteturas oferecem benefícios significativos em termos de escalabilidade e desempenho em suas respectivas áreas de aplicação.
