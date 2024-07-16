*Resumo: São uma maneira de projetar e desenvolver software como uma coleção de servições pequenos, independentes e fracamente acoplados.*

A abordagem facilita o desenvolvimento de aplicativos grandes e complexos, além de cada serviço ser desenvolvido por uma equipe menor de desenvolvedores, ou até mesmo um único desenvolvedor

O desenvolvimento paralelo traz na maioria das vezes a maior eficiência no processo e encurta o tempo de desenvolvimento.

Os micro serviços são facilitadores de CI/CD e mudam as seguintes características:

* Arquitetura modular descentralizada que caracteriza as implementações baseadas em nuvem que encoraja a adoção de [[Containers]].
  
* Os containers fornecem um meio de empacotar aplicativos de forma que eles sejam abstraídos de seus ambientes de run-time.
  
* No lado dos desenvolvedores aumenta a lógica e dependências do aplicativo.
  
* No lado de operações concentra-se apenas em como e onde a lógica é implementada e como ele é gerenciada sem preocupar com números de versão e problemas de configuração específicos do aplicativo.

## Benefícios
Alguns outros benefícios desta implementação:
### Modularidade
Os microsserviços são altamente modulares, oque significa que cada serviço pode ser desenvolvido, implantado e dimensionado independentemente dos outros serviços. Isso facilita a manutenção e atualização do aplicativo ao longo do tempo.

### Escalabilidade
Dimensionar de forma independentemente, com esta regra a arquiteturas de microsserviços são altamente escaláveis e podem lidar com alto tráfego e cargas.

### Resiliência
Proporcionam soluções mais resilientes do que as arquiteturas monolíticas, pois falhas em um único microsserviço não afetam todo o aplicativo.

### Agilidade
Permitem que as organizações liberem novos recursos e atualizações com rapidez e frequência, pos cada microsserviço pode ser desenvolvido e implantado de forma independente.

### Diversidade de tecnologia
Permitem a diversidade de tecnologia, pois cada microsserviço pode ser desenvolvido usando uma pilha de tecnologia diferente, se necessário.

## Evolução
![[Pasted image 20240410225749.png]]

## Microsserviços vs Monolito


| Aspecto         | Monolito                                                               | Microsserviços                                                             |
| --------------- | ---------------------------------------------------------------------- | -------------------------------------------------------------------------- |
| Deployment      | Deploy simples e rápido do sistema inteiro                             | Requer recursos distintos tornando a orquestração mais complexa            |
| Escalabilidade  | Difícil de manter e aplicar mudanças.                                  | Cada elemento pode ser escalado independente sem downtime                  |
| Agilidade       | Dificuldade de adotar novas tecnologias                                | Adota novas tecnologias resolvendo problemas de negócios                   |
| Resiliência     | Um erro pode afetar o sistema inteiro                                  | Uma falha em um serviço não afeta os demais                                |
| Teste           | Teste fim a fim                                                        | Componentes requerem testes individuais                                    |
| Segurança       | Comunicação dentro de uma<br><br>unidade única                         | Comunicação interprocessos requer<br><br>API gateways e maior complexidade |
| Desenvolvimento | Dificuldade de distribuir os esforços dos times em função da estrutura | Os times podem trabalhar de forma independente em cada componente          |