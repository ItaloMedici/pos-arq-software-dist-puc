Hypertext Transfer Protocol, mais conhecido pela sua sigla HTTP. Esse protocolo utiliza o padrão de requisição/resposta entre um cliente e um servidor. 

O protocolo possui alguns verbos que são utilizados para gerar uma ação, entre os principais estão:

* GET - Utilizado para obter um dado
* POST - Utilizando para envio de dados na requisição
* DELETE - Utilizado para deletar um dado
* UPDATE - Utilizado para deletar um dado

O protocolo possui uma seção de cabeçalhos, que podem ser utilizados para dar informações sobre os dados transportados.

## Características
- Requer a atuação de dois programas: Cliente e Servidor
- Atua na camada de aplicação da pilha TCP/IP
- A comunicação utiliza conexões TCP (e UDP no caso do HTTP v3.0)
- O servidor HTTP, por padrão, utiliza a porta 80
- O protocolo que não guarda estado do cliente (stateless)

## Requisição

- Linhas de requisição
	- método | recurso | versão http
	- `POST /app/path HTTP/1.1`
	  
- Linhas de Cabeçalho
	- Campo do cabeçalho: | Valor
	- `User-Agent: Mozilla/4.0`
	- `Host: www.italomedici.com`
	- `Content-Type: application/json
	- ...
	  
- Corpo da entidade
	- `{ "corpo": "da requisição" }`

* Exemplo:
```HTTP
POST /app/path HTTP.1.1

User-Agent: Mozilla/4.0
Host: www.italomedici.com
Content-Type: application/json

{
	"corpo": "da requisição"
}
```

## Resposta

- Linhas de Resposta
	- método | code status | mensagem de status
	- `POST 200 OK`
	  
- Linhas de Cabeçalho
	- Campo do cabeçalho: | Valor
	- `Content-Type: application/json
	- ...
	  
- Corpo da entidade
	- `{ "corpo": "da resposta" }`
	  
-  Exemplo:
```HTTP
POST 200 OK

Date: Mon, 10 Jun 2024 21:34:20 GMT
Server: Apache/2.2.14 (Win32)
Content-Type: text/html
Content-Length: 88
Connection: Closed

<html>
	<body>
		<h1>Resposta</h1>
		<p>Não vem identado dessa maneira!</p>
	</body>
</html>
```

## Código de Retorno

| Código | Propósito        | Descrição                                                     |
| ------ | ---------------- | ------------------------------------------------------------- |
| 1XX    | Informacional    | Requisição recebida, processo em continuidade                 |
| 2xx    | Sucesso          | A ação foi recebida, entendida e aceita                       |
| 3XX    | Redirecionamento | Ações adicionais devem ser executadas para completar o pedido |
| 4xx    | Erro no cliente  | O pedido contém erro de sintaxe ou não pode ser completado    |
| 5xx    | Erro no servidor | O servidor falhou em completar um pedido aparentemente válido |
## Métodos 

| Método  | Propósito                                                                                                             | Safe (readonly) | Idempotente |
| ------- | --------------------------------------------------------------------------------------------------------------------- | --------------- | ----------- |
| GET     | Requisitar a representação de um recurso específico                                                                   | Sim             | Sim         |
| POST    | Enviar dados a serem processados por um recurso. Usado para incluir recursos ou submeter dados de processamento       | Nao             | Nao         |
| HEAD    | Similar ao GET, porém retorno deve ser somente do conjunto de cabeçalhos associados ao recurso solicitado             | Sim             | Sim         |
| PUT     | Requisitar a criação ou atualização de um recurso no servidor a partir dos dados no corpo da requisição               | Nao             | Sim         |
| DELETE  | Excluir um recurso do servidor                                                                                        | Não             | Sim         |
| TRACE   | Solicita ao servidor uma cópia (eco) da requisição. Usado para testar se a requisição foi alterada no caminho         | Sim             | Sim         |
| PATCH   | Utilizado para realizar alterações parciais de um recurso                                                             | Não             | Não         |
| OPTIONS | Usado pelo cliente para entender, ou descobrir, os métodos<br><br>HTTP e outras opções suportadas por um servidor web | Sim             | Sim         |
| CONNECT | Usado quando o cliente estabelece uma conexão HTTPS com um servidor via um proxy                                      | Não             | Não         |
- Idempotente é quando não podemos realizar a mesma requisição multiplas vezes sem afetar o estado do servidor.
- Quando mandamos 2 posts, será inserido 2 elementos. Dessa forma, é idempotente.
### GET
- Tem como objetivo requisitar a representação de um recurso ao servidor
- Por definição, não deve alterar o estado do servidor (safe)
- As requsições podem ser mantidas em cache (favoritos ou bookmarks)
- Envia dados ao servidor via parâmetros na query string que ficam visíveis na URL
- Tem restrição quanto ao tamanho e ao formato das informações enviadas ao servidor
	- Formato: limitado a caracteres textuais (ASCII) incluídos na query string
	- Tamanho:
		- Apache: 4.000 caracteres
		- MS ISS: 16.382 caracteres
		- Tomcat: Padrão 8.192 podendo chegar ate 65k

### POST
- Envia dados aos servidor para serem processados
- Por definição tem objetivo de alterar o estado do servidor (not safe)
	- Os dados enviados pleo corpo não ficam visiveis na URL
	- Muito utilizado para o envido de dados sensíveis como senhas de acesso
		- Criptografado somente em HTTPS
- Não podem ser favoritados 
- Não possuem restrição quanto ao tamanho e ao tipo de dados a serem enviados em seu corpo ao servidor.

### HEAD
- Possui estrutura e objetivo similar às requisições GET, porém o servidor deve enviar apenas o conjunto de cabeçalhos associados ao recurso informado.
- Envia somente os cabeçalhos
- Util para comprar algum header antes de fazer a requisição.

### PUT
- Requisita a criação ou atualização de um recurso no servidor, a partir dos dados no corpo da requisição. 
- Utilizado no upload de arquivos para servidores web.

### DELETE
- Solicita uma exclusão de dados ou representações associados ao recurso informado

### TRACE
- Usado para ecoar o conteúdo de uma requisição HTTP no servidor.
- Usado para verificar se a requisição é alterada no caminho por agentes intermediários, como servidores de cache ou proxy
- O corpo da resposta deve conter o cabeçalho da requisição, dessa forma, caso haja algo a mais do que o inicial consta que a requisição passou por um intermediário.

### OPTIONS
- Usado para descobrir métodos HTTP e outras opções de métodos suportados pelo servidor.
- O cliente pode especificar uma URL para o método de opções ou um asterisco (\*) para se referir ao servidor

### CONNECT
- Usado pelo cliente para estabelecer uma conexão com o servidor web que pode ser via protocolo seguro (TLS)
- É utilizado no caso de requisições proxies

## Histórico de Versões

![[Pasted image 20240610221718.png]]

![[Pasted image 20240610221808.png]]

### HTTP/1.1 vs HTTP/2

| НТТР 1.1                                                                                   | НТТР 2.0                                                                                              |
| ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------- |
| Protocolo textual                                                                          | Protocolo binário.                                                                                    |
| Protocolo sequencial. Requer mais de uma conexão para simular o paralelismo de requisições | Protocolo assíncrono. Utiliza multiplexação para realizar requisições paralelas em uma única conexão  |
| Não prioriza requisições                                                                   | Possui priorização de requisições                                                                     |
| Apenas o cliente pode iniciar uma requisição.                                              | Possui o mecanismo de server push (servidor infere requisições futuras e realizar o envio antecipado) |
| Compressão de dados é opcional                                                             | Compressão de dados é padrão e obrigatória                                                            |
| Envia todos os dados de cabeçalho em cada mensagem                                         | Comprime cabeçalhos para enviar apenas os dados que sofreram alteração ou são desconhecidos           |
![[Pasted image 20240610223015.png]]
### Novos recursos HTTP/2
### Conexão única e persistente
Apenas uma conexão é usada para cada página da web. A mesma conexão é usada enquanto a página da web estiver aberta.

### Multiplexação
Requisições e respostas são pararelas e assíncronas, o navegador solicita vários arquivos e os recebe assim que estiverem prontos na mesma conexão.

### Compressão de cabeçalhos e condificação binária 
Os cabeçalhos são comprimidaos usando um novo padrão separadso e seguro de compressão, chamado HPACK, que reduz a quantidade de dados que cruzam a rede. As informações de cabeçalho são enviadas em formato compacto e binário, não como texto simples.

### Priorização
As solicitações recebem níveis de depência e solicitações no mesmo nível são prorizadas. O servidor utiliza essas informações para ordenar e atribuir recursos apara atender às solicitações

### Criptografia SSL
O HTTP/2 permite adicionar suporte SSL com, em alguns casos, nenhuma penalidade de desempenho, teornando o seu site mais seguro.

## Cabeçalhos (Headers)

Os cabeçalhos utilizados em requisições e respostas do protocolo HTTP carregam informações adicionais sobre a comunicação entre cliente e servidor.

### Tipo de Cabeçalhos

- Request Header: Informações sobre requisição (cliente)
- Response Header: Informações sobre a resposta (servidor)
- Entity Header: Informações sobre o conteúdo da entidade trocada como tamanho e tipo
- General Header: Usado tanto em requisições quanto em repostas.

### Cabeçalhos de Requisição

| Cabeçalho         | Utilidade e Exemplos                                                                                                                                                                                                                                     |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `Accept`          | Lista os tipos de mídia aceitáveis para a resposta. Indica que a solicitação está limitada a um pequeno conjunto de tipos desejados.<br><br>`Accept: application/json`<br><br>`Accept: text/html,application/xhtml+xml, application/xml;q=0.9,*/*;q=0.8` |
| `Accept-Charset`  | Lista os conjuntos de caracteres que são aceitáveis para a resposta<br><br>`Accept-Charset: utf-8, iso-8859,q=0.5`                                                                                                                                       |
| `Accept-Encoding` | Lista conjuntos de codificações que são aceitáveis para a resposta<br><br>`Accept-Enconding: gzip, deflate`                                                                                                                                              |
| `Accept-Language` | Lista os conjuntos de idiomas naturais aceitáveis e preferidos pelo usuário para a resposta.<br><br>`Accept-Language: pt-BR, en`                                                                                                                         |
| `Authorization`   | Informa as credentiais de autenticação do User Agent<br><br>`Authorization: Basic {base64Enconding}`                                                                                                                                                     |
| `Host`            | Indica o host e a porta de onde o recurso está sendo solicitado<br><br>`Host: italo.com`                                                                                                                                                                 |
| `Referer`         | Informa a URL do recurso de origem, ou visitado antes da requsicição atual e que, possivelmente direcionou o usuário para este recurso.<br><br>`referer: https://acesso.italo.com/path`                                                                  |
| `User-Agent`      | Informa ao servidor, detalhes sobre o user agent (client web) que está enviando esta requisição<br><br>`user-agent: Mozilla/5.0 (Windows NT 10.0)`                                                                                                       |
### Cabeçalhos de Resposta

| Cabeçalho          | Utilidade e Exemplos                                                                                                                                         |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `Server`           | Informa detalhes do software que implementa o servidor web<br><br>`Server: Apache`                                                                           |
| `Set-Cookie`       | Apresenta cookies a serem armazenados pelo cliente e que devem ser enviados ao servidor nas próximas requisições.<br><br>`set-cookie: NAME=VALUE;`           |
| `Etag`             | Identificador da versão do recurso que altera toda vez que for alterado. Utilizado para controle de cache<br><br>`Etag: "some id"`                           |
| `Location`         | Redireciona o cliente Web a outra URI<br><br>`Location: https://outra/url`                                                                                   |
| `WWW-Authenticate` | Indica que o servidor requer a autenticação do usuário para acesso ao recurso e de que forma<br><br>`WWW-Authenticate: Basic realm="Site X", chaeset="UTF-8" |


### Cabeçalhos de Entitdade (corpo)

| Cabeçalho        | Utilidade e Exemplos                                                                            |
| ---------------- | ----------------------------------------------------------------------------------------------- |
| Content-Encoding | Indica uma modificação ao tipo de mídia empregado no conteúdo<br><br>Content-Encoding: gzip     |
| Content-Language | Descreve a linguagem na qual o conteúdo foi criado (en, pt, etc)<br><br>Content-Language: pt-br |
| Content-Length   | Indica a quantidade em número de bytes na notação decimal<br><br>Content-Length: 17515          |
| Content-Location | Local alternativo para o recurso solicitado<br><br>Content-Location: /index.htm                 |
| Content-Type     | Indica o tipo de mídia do conteúdo<br><br>Content-Type: text/html; charset=utf-8                |
