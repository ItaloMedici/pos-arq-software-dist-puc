#security #segurança 
## Gerenciamento de identidade e Acesso (IAM)

Sua finalidade é ter um diretório central de identidades ou usuários na organização e um <mark class="hltr-yellow">registro do que eles têm permissão para fazer em diferentes sistemas</mark>, ou seja, suas funções.

Essa área já está padronizada em vários protocolos diferentes, que garantem que tenhamos funções como login único e redefinição de senha.

Todos os provedores oferecem serviços de IAM que irão fortificar a segurança no quesito conta de usuário e autorização de acesso a diversos recursos.

## Gestão de tráfego

Garante um fluxo de acesso controlado a um determinado serviço

* **Listas de acesso (ACSLs):** Especificam quais endereços IPs podem acessar um recurso ou seguimento de rede

## Firewall 
#firewall 
Responsável por gerenciar:
* Quais endereços IP e portas são acessíveis por quem
* Que tipo de tráfego é aceitável

Se aplicado corretamente pode controlar o tráfego indesejado e se implementada incorretamente pode impedir o tráfego desejado.

Essa ferramenta e indispensável aos serviços de TI ao enfrentar os desafios da internet.

## Web Application Firewall (WAF)
#WAF
Proteje aplicações web contra:
* ataques mal intencionados 
* tráfego de internet indesejado, 
* Tráfego de bots
* injeção e negação de serviço da camada de aplicações (DoS)

O WAF funciona por meio de um conjunto de políticas de regras, que tem como objetivo proteger o aplicativo contra vulnerabilidades filtrando o tráfego malicioso.

WAF, ACL e IAM são componentes totalmente distintos e precisam ser implantados em conjunto para melhorar a proteção do ambiente.