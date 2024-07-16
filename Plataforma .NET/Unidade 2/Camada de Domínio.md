## Oque é

- Muitos softwares tem necessidade de armazenamento de dados
- Separar armazenamento de dados das regras de negócio é importante
- Encapsula complexidades para outras camadas
- Baixo acoplamento

## Como se inicia o desenho de um software

- Após entendimento com o cliente
- Após construção de artefatos
- Após prototipagem 

### Tipos modelos

- Guiados por Dados
- Guiados por Domínio/Negócio

## Padrões para dados e domínio

| Padrão             | Tipo       | Descrição                                  |
| ------------------ | ---------- | ------------------------------------------ |
| Transaction Script | Dados      | Foco na ação do usuário                    |
| Table Module       | Dados      | Objetos com representação tabular- DataSet |
| Active Record      | Meio termo | Lógica de domínio simples                  |
| Domain Model       | Domínio    | Domínio independente de dados              |
## Desenvolvimento Guiado a Dados

Inicia o desenho do sistema pelo [[DER]] (Diagrama de entidades e relacionamento), pelo banco de dados.

Os próximos passam acabam seguindo o modelo de banco: domínio, serviços, etc.

### Vantagens

- Velocidade de produção
- Facilidade de persistência dos dados
- Recuperação de dados simplificada (linq)

### Desvantagens

- Ancorado nos recursos do banco
- Fugindo de recursos valiosos de Orientação a Objetos
- Tendência de aumento de Acoplamento (dependência do banco)
- Controle especial das versões do banco e da aplicação.

### Quando optar por dados?

- Foco em registros
- Regra de negócio mais simples

## Transaction Scripts

- Modelo mais simples
- Utiliza Query para realizar alteração no banco de dados
- Mais rápido
- Tipos de dados definidos na construção do DataSet
- Não possui validações em tempo de compilação

### Vantagens

- Fácil entendimento para quem possui entendimento de SQL
- Execução rápida, sem custo de mapeamento entre objeto e banco
- Independência de bancos de dados: SQL, Oracle, MySql e etc.

### Desvantagens

- Dificuldade de manutenção
- Fuga de padrões de código Orientado a Objetos


## Desenvolvimento Guiado a Domínio

Inicia-se o desenho do sistema construindo um diagrama de classes, usualmente um projeto do tipo Class Library, com foco no negócio e comportamento; não nos dados

O restante do projeto acaba se adaptando a este diagrama.

### Vantagens

- Flexibilidade de funcionamento
- Melhor representação do negócio
- Camada de negócios mais independente (menor acoplamento)
- Menos regras de negócio fora do código-fonte (no banco de dados)
- Melhor utilização de princípios de Orientação a Objetos

### Desvantagens

- Maior complexidade na persistência de dados
- Maior complexidade de recuperação de dados
- Pode haver maior custo de transformação
- Menor capacidade de leitura direto do banco

### Quando optar

- Foco em negócio
- Negócio e regras mais complexas

### Nhibernate

- Mapeador Objeto-Relacional
- Mapeador flexível
- Possibilita diferença do modelo de banco para o modelo de classes
- Cabe ao programador definir as transformações

[[NoSQL]]

- Dados não relacionais
- Dados menos estruturados ou esquemas flexíveis
- Maior desempenho em alguns cenários

# Exemplos de escolha



