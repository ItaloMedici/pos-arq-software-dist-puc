#CD
## Continues Delivery (Entrega contínua) 

A entrega contínua realiza a promoção automatizada entre ambientes de desenvolvimento. 

Exemplos: ambiente de testes, integrado ou ambientes de homologação.

Na entrega contínua, entretanto, a etapa de publicação para que o ambiente de produção requer aprovação humana, em conformidade por exemplo com regulatórios exigidos por ITIL.

## Continuous Deployment (Implementação contínua)

Com a entrega contínua implantada, é possível automatizar até mesmo a transferência de objetos para produção. 

Isso é desejado em ambientes altamente dinâmicos como startups e aplicações que não estejam submetidas a elementos regulatórios do ITIL

Ou organizações que possuem implementações avançadas de gestão de mudanças no ITIL.

![[Pasted image 20240826202524.png]]

## Pontos de atenção

Automatizar a promoção de builds também deve considerar a promoção de scripts de banco de dados e até mesmo o transporte de dados de configuração.

Ignorar o processo de automação nas bases de dados criam processos flácidos de entrega contínua.

Toda promoção de ambientes deve incluir processos de verificação de estabilidade.

Testes pós-implantação e testes de fumaça são práticas comuns para criar pipelines de entrega robustos.

