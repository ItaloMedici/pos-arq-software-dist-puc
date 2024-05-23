
## Sistemas

### EHR
- Informações muito sensíveis
- Precisa de maior segurança
- Acesso controlado
- Pouca exposição de dados (Não pode ser o GraphQL por não podemos dar muito acesso livre aos dados)
- Possivelmente REST?

### Sistema de Agendamento
- Real-time, pois iremos trabalhar com agenda para os pacientes consultarem suas agendas com médicos
- Deve utilizar o WebSocket para sempre atualizar em real-time

### Sistema de Laboratório
- Pouca necessidade de ser urgente
- Pode ser requisitado quando precisa
- Não precisa ser websocket
- Laudos podem conter informações sensíveis.
- REST ou RPC

### Sistema de Farmácia
- Grande quantidade de informações
- Prescrições possuem informações sensiveis
- Pode ser GraphQL

## Desafio

### Comunicação entre EHR e Sistema de Farmácia:

As informações precisam de maior segurança, pois possuem informações sensíveis sobre o paciente.
Neste caso utilizaria REST  ❌
#### Resposta
- **Escolha**: RPC
- **Justificativa**: Pois será uma comunicação imediata com o Sistema da Farmácia. O RPC permite invocar diretamente procedimentos em sistemas remotos, otimizando a efeciência da chamada e garantindo a execução confiáveis.
- **Eficiência**: <mark class="hltr-yellow">RPC minimiza a sobrecarga de comunicação</mark>, pois a chamada direta não envolve uma troca excessiva de mensagens. Isso é crucial ao lidar com urgencia de prescrição médica.
- **Segurança:** A comunicação direta e pontual entre o EHR e o Sistema de Farmácia diminui o risco de exposição desnecessárias a ataques.
- **Requisitos Específicos**: A natureza imediata da prescrição exige um estilo de integração que garanta a entrega rápida da informação e que minimiza a latência entre a solicitação e a execução.


### Agendamento Urgente

Como precisamos de informações Real-time, será necessário utilizar Web Sockets ✅
#### Resposta
- **Justificativa:**  Em situações de emergência que demandam um agendamento médico urgente, o estilo de integração WebSocket se destaca pela sua capacidade de fornecer comunicação bidirecional e em tempo real.  Essa abordagem é especialmente valiosa quando um médico precisa alocar um horário imediatamente  para um paciente que requer atendimento urgente.  
- **Comunicação Instantânea:** O WebSocket permite que o Sistema de Agendamento e o Sistema de  Registros Médicos Eletrônicos se comuniquem instantaneamente, permitindo que o agendamento seja  coordenado rapidamente.  
- **Flexibilidade**: A abordagem bidirecional do WebSocket possibilita que as informações sejam  trocadas em tempo real, permitindo ajustes e coordenação em tempo hábil.

### Notificações de Resultados de Exames

REST ❌
#### Resposta
- **Estilo de Integração:** WebSocket

- **Justificativa**: No contexto de notificações de resultados de exames, o uso do WebSocket se destaca mais uma vez. A transmissão imediata dos resultados dos exames para o paciente é essencial, e o WebSocket proporciona uma maneira eficiente de alcançar essa comunicação em tempo real.

- Transmissão Rápida de Informações: Os WebSocket permitem que o Sistema de Laboratório envie notificações diretamente ao paciente através do EHR assim que os resultados estiverem prontos, assegurando uma entrega rápida de informações críticas.

- Entrega Confiável: O WebSocket garante a confiabilidade da entrega, pois a comunicação é mantida ativa até que a mensagem seja confirmada como recebida.

### Solicitação de Exames Adicionais:

REST ou RPC ❌

#### Resposta
- Estilo de Integração: GraphQL

- **Justificativa:** Quando se trata de solicitação de exames adicionais, o GraphQL se destaca como a melhor escolha. Essa abordagem permite ao EHR fazer <mark class="hltr-yellow">consultas específicas</mark> ao Sistema de Laboratório para obter <mark class="hltr-yellow">apenas os dados necessários</mark>, otimizando a comunicação e evitando o <mark class="hltr-yellow">excesso de dados</mark>.

- **Flexibilidade nas Consultas:** O GraphQL permite ao EHR fazer consultas precisas e específicas para requisitar os exames necessários, evitando a transferência de informações não pertinentes.

- **Minimização de Dados Desnecessários:** Ao fornecer apenas os dados solicitados, o GraphQL otimiza a comunicação, reduzindo a sobrecarga de transferência de informações.

### Sincronização de Dados de Paciente

GraphQL ❌
#### Resposta
- Estilo de Integração: REST

- Justificativa: Quando se trata da <mark class="hltr-yellow">sincronização contínua de dados</mark> do paciente entre o Sistema de Registros Médicos Eletrônicos e os demais sistemas, a abordagem REST é a mais adequada. A <mark class="hltr-yellow">estrutura baseada em endpoints</mark> fornece uma maneira clara e padronizada de atualizar informações, garantindo a consistência entre os sistemas.

- **Estrutura Claramente Definida:** O <mark class="hltr-yellow">REST define endpoints específicos</mark> para diferentes tipos de dados, garantindo que a <mark class="hltr-yellow">atualização ocorra de maneira organizada e consistente</mark>.

- Padronização: <mark class="hltr-yellow">A abordagem REST segue os princípios de uma arquitetura orientada a recursos</mark>, simplificando a integração de novos sistemas através da<mark class="hltr-yellow"> adição de novos endpoints.</mark>

