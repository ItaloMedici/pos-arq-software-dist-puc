## Como instalar um datacenter 
Datacenters são locais que possuem uma estrutura física de computadores, onde para seu funcionamento básico e necessário
* Energia: Estarem próximas a duas estações de energia, pois se uma desligar será possível utilizar a outra
* Climatização: Quando mais baixa a temperatura do ambiente melhor o desempenho das máquinas
* Máquinas
* ![[Pasted image 20240404212009.png]]

## Escalonamento Vertical
Utilizado quando a capacidade de um hardware que processa o serviço se esgota. Assim é necessário ampliar os recursos (processador, memória ou rede, portas, link etc)

![[Pasted image 20240407205221.png]]

* Existem componentes que <mark class="hltr-yellow">não podem ser duplicados</mark> em um mesmo equipamento, como é o caso da placa mãe
* Com esta técnica o usuário <mark class="hltr-yellow">perceberá uma interrupção </mark> no serviço prestado.
* Temos que observar o custo de aquisição destes componentes assim como o tempo para o processo de compras
## Escalonamento Horizontal
Pode ser aplicado em algumas camadas lógicas sem a necessidade de alterações nas aplicações, porém algumas aplicações podem apresentar algum tipo de problema dependendo da técnica que for utilizada para o balanceamento de carga.

![[Pasted image 20240407210010.png]]

* Inclui-se no ambiente o componente de distribuição de carga ou Load Balancer

> [!NOTE]
> **Load Balancer**: é um software ou hardware que faz o controle de cada requisição e/ou usuário

* Esta melhora nos indicadores de disponibilidade geralmente é possível através da implementação de **clustering**

> [!NOTE]
> **Cluster**: integrar dois ou mais computadores para que trabalhem simultaneamente no processamento de uma determinada tarefa.
> 
