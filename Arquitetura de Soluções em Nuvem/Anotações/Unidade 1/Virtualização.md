É a técnica computacional que permite a criação de um <mark class="hltr-yellow">ambiente virtual que simula um ambiente real </mark>propiciando a utilização de diversos sistemas e aplicativos <mark class="hltr-yellow">sem a necessidade de acesso físico à máquina na qual estão hospedadas</mark>. 

![[Pasted image 20240407211327.png]]

É a camada de abstração entre hardware e o software que <mark class="hltr-yellow"> protege o acesso direto do software aos recursos físicos do hardware</mark>

## Hypervisor ou Virtual Monitor Machine
É a camada que fornece um ambiente (através de multiplicação de hardware) idêntico ao da máquina física e que conta com uma ou várias máquinas virtuais

Entenda este componente como o responsável por "fatiar" e "isolar" o hardware.

## Pontos importantes
* Na prática, máquinas virtuais são arquivos que são facilmente portáveis de um servidor para outro desde que tenhamos um VMM para suporta-la
* **Serialização de sessão**, **implementação de APIs ou implementação de *microsserviços*** são possibilidades que **podem ser utilizadas**.
* **Virtualização + escalonamento horizontal + cluster**: aumentam significativamente a disponibilidade de um serviço quando utilizadas em conjunto.
