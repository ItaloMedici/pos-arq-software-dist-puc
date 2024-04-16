#security #segurança

## Boas práticas
* **OWASP (Open Web Application Security Project):** Organização sem fins lucrativos referência em segurança mundialmente reconhecida por disseminar sobre segurança em projetos web
* **OWASP TOP TEN:** Documento listando as 10 principais lições sobre segurança web. Representa um vasto consenso sobre os riscos de segurança mais crítica para aplicações web

## Segurança em Front-end
Alguns exemplos de falhas que como prevenir

### SQL Injection
* Inserção de scripts SQL maliciosos através de campos de formulários mal validados;
Prevenção:
* Validação dos campos de formulário e <mark class="hltr-yellow">duplica validação com o schema</mark> da API de destino

### Cross-site script
É a prática de inserir um script HTML e fazer com que o browser aplique esse script no DOM. 
* Possui o objetivo de roubar informações sensíveis do usuário
Prevenção
* <mark class="hltr-yellow">Sanitização do HTML</mark> em campos de formulário (DOMPurify)

## Using Components with Known Vulnerabilities

Utilizar bibliotecas que podem estar com vulnerabilidades conhecidas, é um problema de segurança.

Prevenção
* Atualização dos pacotes npm
* Utilizar `npm audit` para checagem de pacotes instalados com vulnerabilidade conhecidas
* Utilização de ferramentas para detecção de vulnerabilidades em dependências.

## Insufficient Logging & Monitoring

Não monitorar a aplicação de forma adequada, gera uma deficiência na segurança, uma vez que a aplicação pode estar sofrendo um ataque mas a equipe não iria ter conhecimento. 

Prevenção:
* Utilizar ferramentas de log em tempo real
	* [New Relic](https://newrelic.com/pt)
	* [Sentry](https://sentry.io/welcome/)

## Ferramentas

-  [Horusec](https://horusec.io/site/): ferramenta integrada ao VS Code para deteção de vulnerabilidades. 
  
- `npm audit`: comando para rodar no terminal com objetivo de identificar pacotes instalados com vulnerabilidades conhecidas
  
- [Verdaccio](https://verdaccio.org/): Hospedagem própria de pacotes npm