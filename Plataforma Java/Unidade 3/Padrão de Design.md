São soluções repetiveis para um problema comum no projeto de software. Um padrão de design não é uma regra aplicável em qualquer lugar, ele <mark class="hltr-yellow">deve ser transformado via código e adaptado para a realidade do projeto</mark>. É uma descrição ou modelo de como resolver um problema que <mark class="hltr-yellow">pode ser usado em muitas situações diferentes</mark>

## Padrões de Criação

Esses padrões de design são todos sobre a instanciação de classes. Esse padrão pode ser ainda mais dividido em padrões de criação de classes e padrões de criação de objetos. Enquanto os padrões de criação de classes usam a herança de forma eficaz no processo de instanciação, os <mark class="hltr-yellow">padrões de criação de objetos usam a delegação de forma eficaz para realizar o trabalho.</mark>

### Abstract Factory  
Cria uma instância de várias famílias de classes

### Builder  

Separa a construção do objeto da sua representação

### ﻿﻿Factory Method  

Cria uma instância de várias classes derivadas

### Object Pool 

Evita a aquisição e liberação caras de recursos reciclado objetos que não estão mais em uso

### Prototype  

Uma instância totalmente inicializada para ser copiada ou clonada

### Singleton  

Uma classe da qual apenas uma única instância pode existir

## Padrões Estruturais

Esses padrões de design são todos sobre a composição de Classes e Objetos. Padrões de criação estrutural de classes usam herança para compor interfaces. Padrões estruturais de objetos definem maneiras de compor objetos para obter novas funcionalidades.

### Adapter

Faz a correspondência entre interfaces de diferentes classes

### Bridge

Separa a interface de um objeto de sua implementação

### Composite

Uma estrutura em árvore de objetos simples e compostos

### Decorator

Adiciona responsabilidades a objetos dinamicamente

### Facade

Uma única classe que representa um subsistema inteiro

### Flyweight

Uma instância de granularidade fina usada para compartilhamento eficiente

### Private Class Data

Restringe o acesso de acessores/mutadores

### Proxy

Um objeto que representa outro objeto

## Padrões comportamentais

Esses padrões de design são todos sobre a <mark class="hltr-yellow">comunicação entre objetos das classes.</mark> Padrões comportamentais são aqueles que estão mais especificamente preocupados com a comunicação entre objetos.

### Chain of responsibility

Uma maneira de passar uma solicitação entre uma cadeia de objetos

### Command

Encapsula uma solicitação de comando como um objeto

### Interpreter

Uma maneira de incluir elementos de linguagem em um programa

### Iterator

Acessa sequencialmente os elementos de uma coleção

### Mediator

Define uma comunicação simplificada entre classes

### Memento

Captura e restaura o estado interno de um objeto

### Null Object

Projetado para atuar como um valor padrão de um objeto

### Observer

Uma maneira de notificar mudanças para várias classes

### State

Altera o comportamento de um objeto quando seu estado muda

### Strategy

Encapsula um algoritmo dentro de uma classe

### Template method

Adia os passos exatos de um algoritmo para uma subclasse

### Visitor

Define uma nova operação para uma classe sem alterá-la