Chamada de Procedimento Remoto (RPC) (*Remove Procedure Call*), é um dos paradigmas mais simples de API, em que um <mark class="hltr-yellow">cliente executa um bloco de código em outro servidor</mark>

![[Pasted image 20240611205614.png]]

Enquanto o REST é sobre recursos, a RPC é sobre ações. Os clientes tipigicam um nome e argumentos de método para um servidor e recebem de volta JSON ou XML.

## Exemplo

```HTTP
POST /api/conversations.archive HTTP/1.1

Host: slack.com
Content-Type: application/x-www-form-urlencoded
Authorization: Bearer xoxp-1650112-jgc2asDae

channel=C01234
```

## Protocolos de APIs em RPC

As APIs estilo RPC não são exclusivas do HTTP.

Existem outros protocolos de alto desempenho que estão disponíveis para APIs estilo RPC, incluindo o Apache Thrift e Google gRPC.

## Vantagens de protocolos RPC

APIs baseadas em verbos facilitam a organização de contratos extensos (dezenas ou centenas de funcionalidades)

Fornecem facilidade de extensibilidade para produção de APIs 

APIs específicas RPC possuem performance melhor pois operam obrigatoriamente sobre HTTP/2 e usam protocolos de dados como o ProtoBuffen

## Google Remote Call (gRPC)

gRPC utiliza o protocolo HTTP/2 com transmissão de dados binários. Prioriza desempenho e velocidade, especialmente para arquiteturas de microsservços.

## Casos de uso | Exemplos

- Arquiteturas de microsserviços onde a eficiência de comunicação é crucial, como em sistemas de transporte público em tempo real
- Ex: Slack Web API