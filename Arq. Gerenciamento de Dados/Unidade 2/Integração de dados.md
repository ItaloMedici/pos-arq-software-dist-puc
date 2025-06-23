## Dados de sistemas transacionais

- Estruturados para o suportarem o armazenamento e processamento de dados de transações de negócio como vendas, compras, pagamentos, reservas, etc.
- Dados devem estar em conformidade com o ACID (Atomicidade, Consistência, isolamento e deurabilidade)
- Otimizados para operações de criação, escrita e leitura
- Devem ter sempre uma referência temporal associada a cada transações e ligação com todos os dados de contexto dessa transação

![[Pasted image 20240917234028.png]]
### Integração entre sistema transacionais

- Garante a comunicação de dados entre produtos ou sistemas de dados
- As integrações podem ser:
	- Orientadas a evento
	- Consulta transacional de dados
	- Consulta de histórico e/ou dados de conceitos

![[Pasted image 20240917234128.png]]

## Dados para Analytics e Ciência de dados

- Repositório de dados que reúne todos os dados da companhia de forma centralizada
- Constituído por camadas de preparação e disponibilização de dados para diferentes finalidades
- Dados não são orientados a transação e sim a consulta de grandes volumes
- Podem ser constituídos por Data Lake, Data Warehouse ou Data Lakehouse.


### Integração entre camadas do repositório de dados

- Processamentos de dados devem ser garantidos para transitar o dado entre as camadas de um repositório de dados
- Essa transação deve acontecer orientada à transação ou bloco de dados por processos batch
- Entre camadas os dados passam por processos de consolidação limpeza, consistência, controle de qualidade e orientação aos indicadores de negócio.

![[Pasted image 20240917234611.png]]

## Integração entre sistemas transacionais e repositórios de dados

- Processamentos de dados para garantir que todas as informações geradas, alteradas ou inativas nos sistemas transacionais são integradas nos repositórios de dados da plataforma • Os dados podem ser integrados via streaming, ou via batch (por operações agendados)
- Carregamento de dados em Batch podem acontecer por ETL ou ELT