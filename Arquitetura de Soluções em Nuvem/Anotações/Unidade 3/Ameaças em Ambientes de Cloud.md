#security #segurança 

Violações e perda de dados, sequestro de conta, ameaças internas, ataques de malware, ataques de negação de serviço (DoS) e vulnerabilidades na infraestrutura de nuvem são os principais e que merecem destaque

## Violação e perda de dados

Ocorre quando há um incidente em que <mark class="hltr-yellow">informações sensíveis ou confidenciais são acessadas, roubadas ou expostas</mark> por uma parte não autorizada.

Pode ocorrer em um serviço de nuvem quando há uma <mark class="hltr-yellow">vulnerabilidade de segurança na infraestrutura ou aplicativo em nuvem</mark> ou quando as <mark class="hltr-yellow">credenciais da conta de usuário são comprometidas</mark>.

Vazamento de dados, bulk de dados expostos publicamente, configurações incorretas no banco de dados, criptografia ausente podem ocasioná-lo

**Ameaças Internas:** Um funcionário ou outro individuo confiável com acesso autorizado a um serviço de nuvem pode <mark class="hltr-yellow">acessar ou vazar dados confidenciais intencionalmente ou não</mark>

**Provedores terceirizados:** quando os provedores de serviços em nuvem usam provedores terceirizados para armazenar ou processar dados, pode aumentar o <mark class="hltr-yellow">risco de violação de dados se o provedor terceirizado não tiver fortes medidas de segurança</mark> em vigor

### Como evitar?

É importante implementar medidas de segurança fortes como autenticação multifator (MFA), criptografia e monitoramento regular de logs de acesso e trilhas de auditoria.

Testes de vulnerabilidade e de penetração também pode ajudar a identificar e solucionar os pontos fracos da segurança antes que possam ser explorados pelos invasores.

## Perda de dados

**Exclusão acidental:** pode acontecer de usuários excluírem ou sobrescrever acidentalmente arquivos ou dados importantes ou com informações incorretas, levando à perda de dados.

**Falha de hardware:** como o provedor de nuvem usa vários tipos de hardware para armazenar e processar dados, <mark class="hltr-yellow">esses dispositivos podem falhar </mark>devido a vários motivos, como picos de energia, superaquecimento ou mau funcionamento de componentes. Isso<mark class="hltr-yellow"> pode levar à perda de dados armazenados nesses dispositivos.</mark>

**Desastres naturais:** inundações, incêndios, terremotos e furacões, podem causar danos físicos aos datacenters onde os serviços em nuvem estão hospedados, resultando em perda de dados.

**Ataques cibernéticos:** ataques cibernéticos, como infecções por malware, hackers e ataques de phishing, podem levar à perda de dados se o invasor obtiver acesso a dados confidenciais e excluí-los ou se danificar a infraestrutura de nuvem e tornar os dados inacessíveis.

### Como evitar?

Importante implementar planos fortes de <mark class="hltr-yellow">backup e recuperação de desastres.</mark>

Isso envolve criar <mark class="hltr-yellow">várias cópias de dados e armazená-las em locais diferentes</mark>, para que se uma cópia for perdida, outras cópias ainda possam ser recuperadas.

Importantíssimo também é <mark class="hltr-yellow">implementar políticas de retenção de dados</mark> que especifiquem por quanto tempo os dados devem er mantidos e testar backups regularmente.

## Sequestro de contas

É um tipo de ataque cibernético em que um <mark class="hltr-yellow">invasor obtém acesso não autorizado à conta de um usuário</mark> em um serviço de nuvem.

Assim que o invasor tiver o controle da conta, ele poderá visualizar, modificar ou excluir dados, além de realizar outras ações que o usuário legítimo seria capaz de realizar.

Utilização de provedores terceiros e aplicações que utilizam Single Sign-on (SSO), podem te trazer problemas assim como outras questões.

**Senhas fracas:** se a senha de um usuário for fraca ou fácil de adivinhar, ela pode ser facilmente comprometida por um invasor usando ataques de força bruta ou técnicas de adivinhação de senha.

**Ataques de phishing:** os invasores podem enviar <mark class="hltr-yellow">e-mails ou mensagens de phishing aos usuários, fingindo ser o provedor</mark> de serviços em nuvem e solicitando que o usuário insira suas credenciais de login em uma página de login falsa. Depois que o usuário insere suas credenciais,<mark class="hltr-yellow"> o invasor pode usá-las para sequestrar a conta</mark>.

### Como evitar?

* Usar senhas fortes, ativar a autenticação multifator (MFA)
* Evitar clicar em links suspeitos ou baixar arquivos desconhecidos
* Os CSPs devem implementar <mark class="hltr-yellow">monitoramento de endereço IP, autenticação baseada em comportamento e detecção de anomalias baseada</mark> em aprendizado de máquina para ajudar a detectar e evitar tentativas de sequestro de contas.