## Comunicação HTTPS

HTTPS identifica a comunicação segura por meio de protocolo HTTP, na porta 443(por padrão), utilizando os protocolos TLS ou SSL.

### Características
- Fornece uma conexão criptografada com identificação de cliente e servidor.
- Baseado em certificados digitais emitidos por autoridades certificadoras.
- Requer que servidores web sejam configurados com certificados digitais.
- Requer que os navegadores reconheçam as autoridades certificadores emissoras dos certificados do servidor 

### Problemas com Certificados
Um certificado pode apresentar divrsos problemas tais como:
- Certifificado Expierado
- Certificado de um site diferente do acessado
- Certificado revogado pela autoridade certificadora
- Certificados de autoridades ceritificadoras desconhecidas
- Certificados assinados pleo proprio site 

### Testes de certificados
O site https://badssl.com representa um conjunto de sites com certificados com problemas

## Autenticação HTTP

Processo para verificar a identidade do usuário de uma aplicação web/

- Esquemas de Autenticação
	- Usuário Anônimo + Foms da aplicação
	- Autenticação Basic
	- Autenticação Digest
	- Autenticação Bearer (Token Authenticatrion)
- Provedores/Integrações
	- LDAP (Active Directory, Novell NDS)
	- Kerberos
	- Formulário de login providos pelas aplicações WEB

### Autenticação Basic

Tela de login exibida pelo próprio browser e envio de string codificada em Base64 com informação de usuário e senha.

IMPORTANTE: Recomenda-se utilizar apenas com conexões HTTPS

![[Pasted image 20240608194827.png]]

### Autenticação Digest

Cliente e servidor não trocam informações de senha, apenas **hash**

![[Pasted image 20240608195040.png]]

### Autenticação Bearer

Cliente e servidor <mark class="hltr-yellow">trocam um token</mark> previamente acordada. 

![[Pasted image 20240608195317.png]]**