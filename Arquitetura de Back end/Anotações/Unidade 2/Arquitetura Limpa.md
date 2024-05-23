A regra principal da Arquitetura Limpa é a Regra da Dependência, que estabelece que as dependências de um código devem sempre apontar para dentro ou sejam as <mark class="hltr-yellow">camadas internas não devem depender das camadas mais externas.</mark>

Camadas mais internas representam as regras de negócio enquanto as camadas externas representam a tecnologia.

Propõe a separação das preocupações, isolamento das regras de negócio, independência de tecnologia (framework, banco de dados e etc).

Aplica o **Princípio do Reuso Comum**, que diz que não devemos entregar para o usuário mais do que ele realmente precisa e devemos manter juntas somente as classes que o usuário irá utilizar.

O papel do arquiteto é enxergar os pontos de mudança e criar limites/divisões para separar as partes do sistema de forma coesa.

![[Pasted image 20240516195709.png]]

