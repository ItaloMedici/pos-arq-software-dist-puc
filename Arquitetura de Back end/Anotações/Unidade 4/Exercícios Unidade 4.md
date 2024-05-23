Desafio:

Você precisa projetar uma arquitetura de microsserviços que permita a comunicação eficiente e a entrega contínua de música aos usuários. Além disso, você deve incorporar padrões de microsserviços para melhorar a escalabilidade, a resiliência e a manutenibilidade do sistema.

Problemas:

1. ﻿﻿﻿Escalabilidade de Reprodução de Música: Como você projetaria a arquitetura para garantir que a reprodução de música possa ser escalada horizontalmente para lidar com um aumento repentino no número de usuários ativos?
   
	   Podemos utilizar um balanceador de carga para distribuir as requisições entre várias instâncias do serviço. Além disso, para a replicação do serviço podemos utilizar o Kubernetes.
   
2. ﻿﻿﻿Consistência de Dados no Catálogo de Músicas: Explique como você lidaria com a consistência de dados no catálogo de músicas, considerando a atualização de informações sobre artistas, álbuns e músicas.
   
	   Database per Service
   
3. ﻿﻿﻿Resiliência em Recomendações: Descreva como você implementaria o padrão "Circuit Breaker" para garantir que a funcionalidade de recomendações permaneça disponível, mesmo diante de falhas em sistemas subjacentes.
4. ﻿﻿﻿Integração de Perfis de Usuário: Como você projetaria a integração entre o sistema de autenticação e o perfil de usuário para garantir uma experiência personalizada e segura para  
    os usuários?
5. ﻿﻿﻿Entrega Contínua de Música: Explique como você implementaria o padrão "Event  
    Sourcing" para garantir que a entrega contínua de música aos usuários seja rastreável e confiável

Questões:

1. ﻿﻿﻿Padrões de Microsserviços: Identifique e explique como você aplicaria o padrão de "Service 
Discovery" em sua arquitetura de microsserviços para facilitar a comunicação entre os  
diversos serviços.

Resposta:
O padrão de "Service Discovery" é fundamental para uma arquitetura de microsserviços. Ele permite que os microsserviços encontrem e se comuniquem entre si dinamicamente. Uma ferramenta como o Consul ou o Eureka pode ser usada para implementar esse padrão, fornecendo um registro centralizado de serviços disponíveis.


1. ﻿﻿﻿Comparação de Abordagens: Compare a abordagem de "Database Per Service" com a de  
"Shared Database" em relação à consistência de dados e à manutenibilidade. Explique em que cenários cada abordagem seria mais vantajosa.

Resposta:
- Database Per Service: Separação de bases de dados para cada serviço, garantindo  
autonomia e evitando problemas de consistência. Mais complexidade de  
gerenciamento.  
- Shared Database: Uso de uma única base de dados para todos os serviços. Pode gerar  
problemas de escalabilidade e consistência, mas pode ser mais simples de gerenciar  
em pequenas aplicações.


1. ﻿﻿﻿Segurança na Comunicação: Discorra sobre como você garantiria a segurança da comunicação entre os microsserviços, especialmente quando dados sensíveis, como informações de autenticação, precisam ser transmitidos.
   
   Resposta:
- A segurança da comunicação entre os microsserviços pode ser garantida através do uso de protocolos de criptografia, como HTTPS, e da implementação de autenticação e autorização robustas, como OAuth 2.0. O uso de tokens de acesso e certificados SSL/TLS pode assegurar a confidencialidade e autenticidade dos dados transmitidos.


2. ﻿﻿﻿Resiliência e Tolerância a Falhas: Além do padrão "Circuit Breaker", mencione outro padrão de resiliência que você incorporaria em sua arquitetura e explique como ele melhoraria a disponibilidade e a estabilidade do sistema.
   
   Reposta:
   - Além do "Circuit Breaker", outro padrão importante é o "Bulkhead". Ele envolve a separação de  componentes em compartimentos isolados, de modo que falhas em um compartimento não afetem  outros. Isso melhora a resiliência, uma vez que uma falha em um compartimento não sobrecarrega os  recursos disponíveis para outros compartimentos


3. ﻿﻿﻿Impacto nos Usuários: Analise como a adoção da arquitetura de microsserviços e dos padrões discutidos afetaria a experiência dos usuários no serviço de streaming musical.  
    Considere aspectos como desempenho, personalização e disponibilidade.
    
Reposta:
- A adoção da arquitetura de microsserviços e dos padrões discutidos pode trazer vários benefícios para  os usuários. A escalabilidade permitiria que mais usuários desfrutassem do serviço simultaneamente,  enquanto a resiliência garantiria que a plataforma permanecesse disponível mesmo em face de falhas.  Além disso, a personalização das recomendações e a entrega contínua de música melhorariam a  experiência do usuário, mantendo-os envolvidos e satisfeitos.