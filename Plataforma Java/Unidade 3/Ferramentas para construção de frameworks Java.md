## Reflexão

É um recurso na linguagem Java. Permite que o programa em execução examine ou "introspeccione" a si mesmo e manipule as propriedades internas do programa. Por exemplo, é possível que uma classe Java obtenha os nomes de todos seus membros e os exiba

![[Pasted image 20240801221112.png]]

## Aspecto

Visa aumentar a modularidade, adicionando comportamento ao código existente sem modificar o próprio código, especificando separadamente qual código é modificado por meio de uma especificação "pointcut", como "registrar todas as chamadas de função quando o nome da função começar com 'set'". Isso permite que comportamentos que não são centrais para a lógica de negócio (como registro de logs) sejam adicionados a um programa sem sobrecarregar o núcleo do código para a funcionalidade.

![[Pasted image 20240801221432.png]]

## Processamento de Anotações

O processamento de anotação no nível de origem apareceu pela primeira vez no Java 5. É uma técnica útil para gerar arquivos de origem adicionais durante o estágio de compilação. Os arquivos de origem não precisam ser arquivos Java - você pode gerar qualquer tipo de descrição, metadados, documentação, recursos ou qualquer outro tipo de arquivo, com base em anotações em seu código-fonte. O processamento de anotações é usado ativamente em muitas bibliotecas Java onipresentes, por exemplo, para gerar metaclasses em QueryDSL e JPA, lombok e outras.

![[Pasted image 20240801221738.png]]