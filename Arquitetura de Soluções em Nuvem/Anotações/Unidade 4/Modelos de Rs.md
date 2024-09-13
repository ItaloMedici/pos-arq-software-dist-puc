## REHOST

Conhecimento como migração lift-and-shift , é o processo em mover seus workloads para nuvem sem modificações. Essas estratégia envolve menor esforço e risco de migração, é um dos modelos mais utilizados geralmente usando ofertas de infraestrutura como serviço IaaS.

É comum ser escolhida por empresas que estão com contrato de datacenter próximo ao vencimento, precisam migrar rapidamente e não possuem possibilidade de realizar modificações nas aplicações.

## REFACTOR ou REPLATAFORM

Conhecido como "lift-tinker-and-shift", por ajustar um workload para o modelo baseado em PaaS deixando de lado o modelo convencional laaS. Nessa estratégia,<mark class="hltr-yellow"> poucas otimizações são feitas antes de migrar para a nuvem.</mark>

Utiliza-se comumente quando temos <mark class="hltr-yellow">domínio da infraestrutura</mark> que é ofertada com plataforma e alguns serviços podem ser apontados para a oferta de PaaS como bancos de dados por exemplo.

## RETIRE

Uma <mark class="hltr-yellow">migração de larga escala</mark>, quando se analisa toda a infraestrutura atual, é muito comum encontrar aplicações legadas que não são mais utilizadas. Aproximadamente <mark class="hltr-yellow">5% das aplicações podem ser desligadas completamente e ninguém vai reclamar</mark>.

São aplicações que tiveram <mark class="hltr-yellow">uma versão nova desenvolvida</mark> e deveriam ser desligadas e foram esquecidas. Ambientes de testes e desenvolvimento de aplicações que ficaram esquecidas e continuaram consumindo recursos estão na lista.

## RETAIN

É um método que consiste em <mark class="hltr-yellow">manter os aplicativos em seu ambiente de origem</mark> pois, em alguns casos não há sentido para o negócio migrar uma aplicação porque ela teve uma renovação contratual ou está próxima de ser descontinuada. Pode também incluir aplicativos que precisam de refactor e tendo a possibilidade de adiar para uma nova avaliação futura.

O esforço maior é identificar quais são estas aplicações e os responsáveis por elas pois desligar algo que alguém, por ventura possa estar utilizando é complicado.

## RELOCATE

Com o avanço da tecnologia de virtualização e de containers, criou-se uma nova estratégia, de recolocação das aplicações. Esta estratégia está ligada a identificar características mínimas de compatibilidade de aplicações entre ambientes [[Docker]] e virtuais.

Essa estratégia é comumente confundida com a Rehost em alguns casos, porém vale ressaltar que <mark class="hltr-yellow">a ideia é levar a aplicação para dentro do container </mark>e automatizar o máximo que podemos com tecnologias como o K8's.

## REARCHITECT

Se concentra na modificação e na extensão da funcionalidade do aplicativo e na base de código para otimizar a arquitetura do aplicativo para a escalabilidade da nuvem. Ligada diretamente à <mark class="hltr-yellow">agilidade de inovação</mark> da empresa, busca por escalabilidade e aumento desempenho, que seriam difíceis de alcançar utilizando uma arquitetura tradicional.

Um exemplo muito comum, é <mark class="hltr-yellow">mudar a arquitetura monolítica para uma arquitetura de microsserviços</mark> ou fazer uma <mark class="hltr-yellow">implementação de serverless.</mark>

## REBUILD

É a abordagem mais radical e leva a modificação do código-fonte de forma a <mark class="hltr-yellow">reescrever o aplicativo do zero</mark>. A decisão é tomada quando as soluções atuais não atendem às necessidades do negócio ou quando um <mark class="hltr-yellow">aplicativo legado não pode ser executado</mark> em nuvem.

Aplicativos com tecnologias muito antigas e que <mark class="hltr-yellow">não tem suporte nos ambientes em nuvem</mark> seguem este padrão principalmente as que tiveram entraram na obsolescência da curva tecnológica.

## REPLACE

Aplicativos SaaS podem fornecer toda a funcionalidade necessária para um certo workload a ser migrado. Pode ser mais interessante substitui-lo por completo e eliminar o esforço de rearchitect e rebuild da aplicação. Essa abordagem requer pouco esforço, uma vez que só é necessária a carga dos dados existentes no novo workload.

• Modernização de plataforma pode ser um exemplo para utilização deste tipo de modalidade.