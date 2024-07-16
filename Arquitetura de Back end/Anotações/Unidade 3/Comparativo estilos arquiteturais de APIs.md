
## Comparação

Cada estilo de integração possui vantagens e desvantagens que se alinham de maneira distinta com   os requisitos de cada cenário. A escolha do estilo apropriado deve considerar fatores como:

- [[RPC]]: Eficiência na execução de procedimentos remotos, mas requer conexão contínua entre sistemas.

- [[Web Socket]]: Comunicação em real-time, adequado para notificações urgentes, mas requer suporte contínuo de conexões.

- [[GraphQL]]: Flexibilidade em solicitações, mas pode transmitir mais dados do que necessário.

- [[REST]]: Estrutura clara por meio de endpoints, mas menos adequado para atualizações em real-time.
  
- [[SOAP]]: Estrutura poderosa, possibilitando integração com sistemas corporativos e governamentais, porém utiliza XML e obriga SOAP de ambas partes.

- [[WebHook]]: Reposta em real-time a eventos, exige uma lógica para implementação.

| ABORDAGEM      | VANTAGENS                                                                                          | DESVANTAGENS                                                                                                                                                         |
| -------------- | -------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [[REST]]       | • Fácil interação com recursos<br><br>• Padrão amplamente adotado                                  | • Pode levar a múltiplas requisições para ações complexas<br><br>• Falta de flexibilidade em algumas situações                                                       |
| [[SOAP]]       | • Comunicação estruturada e rica em recursos<br><br>• Integração com sistemas corporativos         | • Complexidade de implementação<br><br>• Overhead devido ao uso de XML<br><br>• Requer cliente e servidor SOAP                                                       |
| [[GraphQL]]    | • Flexibilidade para clientes obterem o que precisam<br><br>• Melhor eficiência de rede            | • Requer mecanismo de consulta mais complexo no servidor<br><br>• Gera consultas complexas e ineficientes se mal projetado                                           |
| [[RPC]]        | • Performance pela comunicação binária e multiplexação<br><br>• Geração automática de código       | • Requer suporte a HTTP/2<br><br>• Pode ser mais difícil de depurar devido à natureza binária<br><br>• Maior curva de aprendizado em comparação com APls<br><br>REST |
| [[Web Socket]] | • Atualizações em tempo real para clientes.<br><br>• Redução da latência em comparação com polling | • Requer suporte em ambos os lados (cliente e servidor)<br><br>• Maior complexidade em comparação com APls tradicionais                                              |
| [[WebHook]]    | • Resposta em tempo real a eventos específicos<br><br>• Redução de overhead de consulta constante  | • Pode exigir lógica adicional para confirmações e repetições<br><br>• Falha de entrega pode ocorrer se não implementado<br><br>corretamente                         |

## Evolução da Integração

- RPC e WebSocket: Ao adicionar novos sistemas, a expansaão das interfaces RPC ou WebSocket pode ser simples, mantendo a eficiência e a comunicação em tempo real.

- GraphQL: A inclusão de novos tipos de dados pode ser facilmente integrada através da criação de novos campos e tipos de schemas GraphQL.

- REST: A adição de novos endpoints REST para novos sistemas pode ser escalonada à medida que o sistema cresce

## SOAP vs REST

| ASPECTO                               | SOAP                                                           | REST                                                   |
| ------------------------------------- | -------------------------------------------------------------- | ------------------------------------------------------ |
| Estrutura                             | Protocolo baseado em XML                                       | Protocolo baseado no estilo arquitetural               |
| Comunicação de Dados                  | Utiliza um padrão de mensagens baseado em XML                  | Utiliza XML ou JSON para envio e recebimento dos dados |
| Comunicação                           | Invoca serviços por meio de HTTP e RPC (remote procedure call) | Baseado 100% em HTTP e nas URIs                        |
| Formato da Mensagem                   | Resultado codificado no padrão SOAP                            | Resultado facilmente interpretado por um humano        |
| Compatibilidade com<br><br>Javascript | Complexa                                                       | Simplificada                                           |
| Desempenho                            | Médio                                                          | Alto                                                   |
- SOAP é um protocolo, REST é uma arquitetura (usa protocolo existente)
- SOAP expõe comportamento, REST expõe dados
- SOAP é mais pesado e complexo que REST

### Requisição SOAP

```xml
<?xml version="1.0"?>
<soap:Envelope 
	xmins: soap="http://www.w3.org/2001/12/soap-envelope"
	soap:encodingStyle="http://www.w3.org/2001/12/soap-encoding">
	<soap:body pb="http://www.some.com/path">
		<pb:GetUserDetails>
			<pb:UserID>12345</pb:UserID>
		</pb:GetUserDetails>
	</soap:Body> 
</soap:Envelope>
```
### Requisição REST

```HTTP
GET http://www.some.com/path/GetUserDetails/12345
```

## GraphQL vs RST

| GraphQL                                                                                                                                 | REST                                                                                  |
| --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- |
| Linguagem de consulta oferece eficiência e flexibilidade para resolver problemas comuns ao integrar APls                                | Um estilo arquitetural amplamente visto como padrão para o desenho de APls            |
| Disponível via um único endpoint HTTP que provê todas as funcionalidades do serviço                                                     | Disponível via um conjunto de URLs, cada uma expondo um único recurso.                |
| Utiliza uma arquitetura baseada no cliente                                                                                              | Utiliza uma arquitetura baseada no servidor                                           |
| Dificulta o uso do mecanismo de cache                                                                                                   | Utiliza cache de maneira simplificada e automática                                    |
| Não trabalha com versionamento de API                                                                                                   | Suporta múltiplas versões da API                                                      |
| Trabalha apenas com JSON                                                                                                                | Suporta múltipos formatos de dados (JSON, XML, etc)                                   |
| Oferece uma única forma de documentação: GraphiQL                                                                                       | Oferece uma faixa de opções para documentação automatizada (OpenAP\| e API Blueprint) |
| Dificulta o uso de códigos de status do protocolo HTTP para Utiliza os códigos de status do protocolo HTTP para identificação de erros. | Utiliza códigos de status do protocolo HTTP para identificação fácil dos erros.       |
