*Resumo: Arquitetura distribuída de forma lógica e física em serviços*

![[Pasted image 20240429224633.png]]

É conquistado a partir da separação das regras lógicas em pequenos serviços com suas regras individuais.

> [!tip] Chaves
> * Flexibilidade
>  * Implantabilidade (é mais rápido colocar novas regras de negócio em produção)
>  * Menos complexo que uma aplicação monolítica.
>  * Escalavel
 
## Flexibilidade em UI
![[Pasted image 20240429224545.png]]

Essa arquitetura permite distribuir as interfaces em múltiplos serviços 

## Flexibilidade em DB
![[Pasted image 20240429224738.png]]

Permite dividir os bancos de dados de forma lógica e física.

* Mais proteção individual
* Maior desafio de implementação