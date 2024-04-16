#security #segurança

> [!Falar de Segurança é]
> Exercitar a capacidade de mitigar o impacto negativo de uma violação de sistema

Quando se fala de nuvem o termo ***assessment***; que se pauta a partir da análise e batimento das regras de **audibilidade** baseada em **critérios** que são definidos por **órgãos** considerados como referência no assunto através de seus manuais de **melhores práticas** publicados. 

## Pilares da segurança da Informação
![[Pasted image 20240415222851.png]]

### Integridade
<mark class="hltr-yellow">Impedir</mark> que os dados possam ser <mark class="hltr-yellow">manipulados, excluídos ou modificados</mark> de uma forma <mark class="hltr-yellow">não permitida</mark> pela política do <mark class="hltr-yellow">fluxo de dados da empresa</mark> garantindo precisão e <mark class="hltr-yellow">ausência de modificações não autorizadas</mark> em todos os seus componentes.

### Confidencialidade
<mark class="hltr-yellow">Impedir o acesso informações sigilosas e críticas </mark>por pessoas <mark class="hltr-yellow">não autorizadas</mark> garantindo que <mark class="hltr-yellow">apenas usuários autorizados</mark> acessem as informações.

### Disponibilidade
Assegurar o acesso de forma integra e disponível, sempre que necessário, para as <mark class="hltr-yellow">pessoas autorizadas a visualizar e acessar os dados desejados</mark>. Um sistema está disponível quando todos os seus componentes estão <mark class="hltr-yellow">disponíveis e operacionais quando necessário</mark>, conforme <mark class="hltr-yellow">solicitado por um usuário autorizado</mark>.

Para sistemas que serão executados em ambientes que geralmente, não são conhecidos por nós, há responsabilidades adicionais que estão relacionadas à <mark class="hltr-yellow">capacidade de um sistema de responsabilizar os usuários por suas ações</mark>.

* **Auditabilidade**: é a capacidade de <mark class="hltr-yellow">monitorar ações de máquinas e humanos</mark>
  
* **Não repúdio ou irretratabilidade:** é uma capacidade de um sistema para <mark class="hltr-yellow">comprovar a ocorrência ou não ocorrência de um evento</mark>, como o envio de um e-mail.
  
* **Confiabilidade**: onde um sistema é capaz de <mark class="hltr-yellow">verificar a identidade e estabelecer confiança no terceiro e nas informações</mark> ou serviços que ele fornece.
  
* **Privacidade**: onde um <mark class="hltr-yellow">sistema deve obedecer à legislação de privacidade</mark> e permitir que os indivíduos controlem, quando viável, essas informações pessoais e complementam a relação de responsabilidades ou serviços da segurança da informação com os itens:
  
	* **Controle de acesso:**<mark class="hltr-yellow"> limita e controla o acesso</mark> lógico/físico aos ativos de uma organização por meio dos <mark class="hltr-yellow">processos de identificação, autenticação e autorização</mark>, e protege os recursos contra acessos não autorizados.
	  
	* **Autenticidade**: garante que uma comunicação é autêntica, onde <mark class="hltr-yellow">origem e destino podem verificar a identidade da outra</mark> parte envolvida na comunicação, com o objetivo de <mark class="hltr-yellow">confirmar que a outra parte é realmente quem alega ser</mark>. Podem ser tipicamente usuários, dispositivos ou ou processos.

### Prevenção
Refere-se à <mark class="hltr-yellow">adoção de medidas para a proteção de ambientes</mark> (sistemas, servidores, programas ou qualquer outro) que proporcione acesso remoto a informações sensíveis.

### Detecção
Complementa o processo de prevenção e <mark class="hltr-yellow">envolve o monitoramento contínuo </mark>com foco na <mark class="hltr-yellow">identificação de ataques, vazamentos e outros problemas</mark> o mais rapidamente possível.

### Resposta 
São as <mark class="hltr-yellow">ações</mark> a serem tomadas quando há <mark class="hltr-yellow">falhas na prevenção e na detecção</mark>.
Há providencias definidas para interromper o ataque e reduzir os danos causados por ele.

### Tecnologia 
São todas as <mark class="hltr-yellow">ferramentas, hardware ou software</mark>, que permitem a p<mark class="hltr-yellow">revenção, detecção</mark> e resposta aos incidentes de segurança;

### Processos
Permitem máxima eficiência no uso da tecnologia;

### Pessoas
São quem operam a tecnologia, criando e executando os processos.


## Recursos Básicos

### 🔐 Criptografia
O objetivo da criptografia é manter os <mark class="hltr-yellow">dados confidenciais protegidos</mark>.

**A criptografia é feita com uma chave criptográfica**. A criptografia é particularmente importante na nuvem, onde terceiros armazenam e transmitem seus dados.

É comum falar em criptografia em <mark class="hltr-yellow">trânsito e em repouso</mark>.
* Transito: Certificados SSL

O objetivo de criptografar <mark class="hltr-yellow">dados em trânsito é evitar escutas telefônicas</mark> e a <mark class="hltr-yellow">em repouso visa criptografar dados armazenados em disco</mark>, seja em um banco de dados, em um sistema de arquivos ou em outro tipo de meio de armazenamento.

**RISCO:** o ato de proteger os dados contra violações de confidencialidade pode realmente comprometer a acessibilidade se a chave for perdida.

As ferramentas de gerenciamento de chaves são populares pois você pode armazenar chaves e renová-las com certa frequência. Isso é importante, pois mudará a chave. Se alguém obtiver acesso a chaves anteriores, isso as tornará inúteis.