A implementação de IaC trouxe um avanço sem precedentes para orquestração e assim as tecnologias de suporte precisam evoluir

Surgem então os containers: implementam na nuvem aplicativos executáveis únicos, que não dependem de um sistema operacional. Dentro deles estão todos os executáveis, códigos binários, bibliotecas e arquivos de configuração necessários para seu funcionamento.

Com o crescimento da utilização de containers, a demanda dos profissionais com este conhecimento é enorme.

A arquitetura padrão de um ambiente de <mark class="hltr-yellow">container precisa de um run-time</mark> e o mais famoso do mercado é o ***[[Docker]]***.

<mark class="hltr-yellow">Containers precisam ser orquestrados</mark> e a ferramenta padrão de orquestração é o ***kubernetes*** (K8's) 

IaC geralmente é escrito em YAML

* São um método de virtualização em nível de sistema operacional que permite executar uma aplicação e suas dependências como processos e com recursos isolados que simulam uma máquina virtual
* Permitem empacotar facilmente o código, as configurações e as dependências de uma aplicação em elementos fundamentais que oferecem consistência ambiental, eficiência operacional, produtividade de desenvolvedores e controle de versões.


## Vantagens

Compartilhar mais para economizar ainda mais recursos trabalhando no nível recursos do sistema operacional entre várias aplicações

Não preciso instalar 2 kernels do Linux por exemplo e isto simplifica toda a minha gestão

Economizo mais que na virtualização que precisa de uma pilha completa para o funcionamento de uma aplicação.

## Tecnologias

*Open Container Initiative* (**OCI**) é o projeto que cuida de toda a especificação e padronização dos containers

Quem viabilizou isto tudo é o [[Docker]], que é apenas um produto, ou seja *dockerização* do ambiente é uma tendencia

A principal <mark class="hltr-yellow">vantagem  do Docker é possuir um vasto respositório de imagens</mark> gerenciadas online.

Além do Docker também existem outras tecnologias, como LXC, LXD, LXCFS e o Overlay File System (OFS) que é utilizado pelo Docker para economizar disco.

Além disto o é o Docker que gerencia os processos de container para que possamos isolar os recursos e não ocasionar nenhum crash por invasão de recursos compartilhados.

## Orquestração 
Para a orquestração deste ambiente apresenta-se a ferramenta kubernetes ou K8s

A ferramenta foi <mark class="hltr-yellow">criada pelo google</mark> para utilização interna e é open source.

Uma das funcionalidade que possuímos nesta solução é a <mark class="hltr-yellow">escala do ambiente de serviço</mark> utilizando as métricas para implementação das técnicas mostradas <mark class="hltr-yellow">(auto-scaling)</mark>

