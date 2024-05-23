*Comunicação bidirecional, entre cliente e servidor. Troca de mensagens via eventos.*

Web Socket é um protocolo usado para estabelecer um canal de comunicação de streaming bidrecional sobre uma única conexão de Protocolo de Controle de Transporte TCP

Embora o protocolo seja geralmente usado entre um cliente web e um servidor, às vezes é usado também para comunicação servidor-servidor.

> [!tip] 
> Diferente dos demais, o websocket abre uma conexão única TCP, enquanto Rest e outros sempre precisam abrir uma conexão para cada request. 

## Vantagens

Emula canais bidirecionais de comunicação para facilitar conversações.

Aplicações que demandam atualizações de eventos com frequência fazem uso desse tipo de modelo. Como:
- Slack
- Trello
- Blockchain

WebSockets podem habilitar a comunicação *Full-Duplex* (servidor e cliente podem se comunicar simultaneamente) com baixo custo.

Além disso, eles são projetados para trabalhar sobre a porta 80 ou 443, permitindo-lhes trabalhar bem com firewalls que podem bloquear outras portas.

WebSockets são ótimos para dados rápidos e para transmissão ao vivo se possuir conexões de longa duração

Deve ter cuidado ao utilizado com conexões móveis ou regiões de má qualidade de conectividade. Isso porque os clientes devem manter a conexão vida. Se a conexão morrer, o cliente irá precisar reiniciá-la.
