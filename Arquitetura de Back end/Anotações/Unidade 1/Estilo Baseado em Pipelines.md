![[Pasted image 20240423220902.png]]

Sistemas projetados utilizando o estilo arquitetural pipes and filters fazem o tratamento de dados obtidos através de algum mecanismo de ingestão ou produzidos internamente, movimentando-os através de unidades computacionais independentes (os filters), conectadas de maneira planejada (as pipes) para serem processadas e enriquecidos, de maneira incremental e contínua

Em uma analogia com um sistema de tratamento de esgotos, um sistema implementado utilizando pipes and filters, a "agua" é substituída por dados, os dutos são substituídos por algum mecanismo de comunicação e, finalmente, os filtros são substituídos por unidades computacionais.

> [!Info]
> O tipo de processamento executado por um _filter_ inclui gerar, filtrar, transformar (inclusive enriquecendo), agregar e dar finalidade a dados.

Filters: lêem dados, executam algum tipo de processamento específico, e escrevem os resultados.
Pipes: Conectam dois filters, recebendo input e escrevendo


AWS Lambda

