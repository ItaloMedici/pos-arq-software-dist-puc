Exposição de funcionalidades para a camada de interfaces com usuário ou sistemas externos.

Movimento de padrão [[Arquitetura Orientada a Serviços (SOA)]]

## Porque utilizar camadas de Seviços

### Encapsula as camadas de negócio e dados
- A camada de interface não precisa conhecer as camadas de negócio e de dados, somente a camada de serviços

### Suporta múltiplas interfaces (reuso)

- Web, App, Software externos, APIs e etc
- Reutilização dos serviços
- A interface não deve interferir no funcionamento dos serviços

## Ajuda no isolamento de interface

- Contribui para o baixo acoplamento
- Dificulta a construção de código de baixa qualidade

## Características

### Permitir concorrência

- Chamadas em paralelo são premissas
- Muitas chamadas simultâneas

### Não armazena Status (Stateless)

- Cada chamada é independente
- Envia o conjunto de dados completo
- Recebe o retorno completo do processamento
