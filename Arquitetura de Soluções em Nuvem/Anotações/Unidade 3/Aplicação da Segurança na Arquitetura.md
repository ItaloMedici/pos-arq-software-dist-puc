#security #segurança 

## Criptografia e canais de comunicação

Defina canais de <mark class="hltr-yellow">comunicação seguros para proteger os dados em trânsito</mark>, como <mark class="hltr-yellow">protocolos SSL/TLS</mark> para criptografar comunicações de rede entre clientes e recursos em nuvem.

Utilize redes privadas virtuais (VPNs) ao acessar recursos de nuvem remotamente principalmente balanceadores de carga e firewalls de aplicativos da web.

## Comunicação de APIs

Implemente a comunicação segura da API por meio de mecanismos como **gateways de API** e **mecanismos de autenticação**.
#### Gateway de API
Atua como um único ponto de entrada para solicitações de API e fornece os recursos de segurança:
* Autenticação
* Validação de solicitação
* Limitação de taxa e transações/transferência
* Criptografia de tráfego
* Tradução de protocolo

#### Autenticação e autorização
Utilize padrões como **OAuth 2.0 ou OpenID** Connect para <mark class="hltr-yellow">autenticação e autorização baseada em token</mark> 

## Transport Layer Security (TLS)

Configure os certificados TLS para:
* Estabelecer canais de comunicação seguros entre clientes e as APIs 
* Habilitar HTTPS para endpoints criptografando dados em trânsito
Mitigando assim riscos de espionagem ou adulteração

## Secrets e Secure APls

Geralmente exigem chaves de autenticação ou segredos para acesso e você precisa que essas chaves sejam geradas, armazenadas e transmitidas com segurança.

## Validação e sanitização de entrada 

Valide e limpe a entrada do usuário para evitar cargas maliciosas.
* Evita SQL Injection

## Limitação de taxa e Throttling

Proteja sua aplicação contra abuso na utilização de APl, como ataques de negação de serviço (DoS) ou uso excessivo de transações por período de tempo por cliente.

## Controle de versão e documentação da API

Controle as versões disponibilizadas das APls e forneça uma documentação clara para promover uma integração segura. A gestão de contratos de APls é um diferencial nesta conversa.

## Registro e monitoramento

Implemente registro e monitoramento abrangentes para atividades de APl.
p