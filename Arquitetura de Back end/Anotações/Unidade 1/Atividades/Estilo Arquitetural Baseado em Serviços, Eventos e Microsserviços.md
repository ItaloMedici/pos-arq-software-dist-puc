
### 1. ﻿﻿﻿O que é um serviço em uma arquitetura de serviços?

É uma separação lógica e física de uma regra de negócio do sistema em um serviço.

Resposta:
	É um c<mark class="hltr-yellow">omponente autônomo e modular</mark> que executa uma função <mark class="hltr-yellow">especifica e bem definida</mark>. Ele expõe uma interface clara para interação com outros serviços e é responsável por <mark class="hltr-yellow">manter seu próprio estado</mark> garantindo o encapsulamento e a <mark class="hltr-yellow">separação de responsabilidades.</mark>

### 2. ﻿﻿﻿Qual é a diferença básica entre uma arquitetura monolítica e uma arquitetura de microsserviços?

Na arquitetura monolítica temos um serviço para toda a aplicação, enquanto em microsserviço separamos cada domínio em serviços com um banco de dados lógico dedicado.

Resposta:
	Está na forma como o aplicativo é estruturado. Em uma arquitetura de monolítica, todos os componentes do aplicativo estão interligados em um único código-basem tornando-se um único processo de execução. Já na arquitetura de microserviços o aplicativo é divido em  múltiplos serviços menores e idependetes que se comunicam entre si atraves de protocolos leves, como o HTTP ou mensagens assíncronas. 

### 3. ﻿﻿﻿Em uma arquitetura de microsserviços, os componentes são altamente acoplados ou desacoplados?

Desacoplados


### 4. ﻿﻿﻿Em uma arquitetura de microsserviços, qual é o principal beneficio de dividir um aplicativo em componentes menores e independentes?

Conseguimos uma escalabilidade maior de nossa aplicação, maior manutenibilidade pois cada regra está separada em seu microsserviço

### 5. ﻿﻿﻿A comunicação entre os microsserviços pode ser sincrona ou assíncrona. O que isso significa?

Pode ser assíncrona, ou seja para a comunicação demanda um tempo de resposta. Oque a torna assincrona

Resposta:
	A comunicação entre os microsserviços pode ser síncrona ou assíncrona. A comunicação síncrona é aquela em que o emissor aguarda uma resposta do receptor antes de prosseguir, enquanto a comunicação assíncrona permite que o emissor continue sua execução sem esperar pela resposta do receptor. A escolha entre comunicação síncrona ou assíncrona depende dos requisitos de latência, disponibilidade e consistência do aplicativo.

### 6. ﻿﻿﻿Em uma arquitetura orientada a eventos, os componentes interagem através de quais elementos principais?

Um canal de evento, na qual é depositado a mensagem que deve ser cosumida pelo serviço.

Resposta:
	Em uma arquitetura orientada a eventos, os componentes interagem através de eventos e mecanismos de publicação e assinatura. Os produtores de eventos publicam eventos em um barramento ou sistema de mensagens, enquanto os consumidores de eventos assinam os eventos de seu interesse e reagem a eles de acordo

### 7. ﻿﻿﻿O que é um "evento" em uma arquitetura orientada a eventos e como ele é usado para coordenar a comunicação entre os componentes do sistema?

Um evento é uma mensagem depositada em uma esteira de mensagens, assim que ela é lida por algum componente é executado uma resposta a este evento.

resposta:
	Um evento, em uma arquitetura orientada a eventos, é uma notificação ou mensagem que representa uma mudança de estado ou uma ação que ocorreu no sistema. Os eventos são usados para coordenar a comunicação entre os componentes do sistema, permitindo que eles reajam e respondam às mudanças de estado ou ações de outros componentes de maneira desacoplada e assincrona.

### 8. ﻿﻿﻿Por que a escalabilidade é considerada uma vantagem nas arquiteturas de microsserviços e  orientadas a eventos?

Pela separação lógica e física dos elementos

Resposta:
	A escalabilidade é considerada uma vantagem nas arquiteturas de microsserviços e orientadas a eventos porque esses modelos facilitam o dimensionamento horizontal dos componentes do sistema. Na arquitetura de microsserviços, cada serviço pode ser escalado independentemente de acordo com suas necessidades de carga, enquanto nas arquiteturas orientadas a eventos, a comunicação assincrona e baseada em publicação e assinatura permite