*Resumo: é possível modifica-la e adicionar componentes sem precisar reinstalar ou alterar algo da núcleo*

> [!tip] Chaves
> * Foco em extensibilidade
> * Crescer a aplicação sem afetar o núcleo

> [!Extensões do Google]
> Os navegadores, como o google por exemplo, dão a possibilidade de adicionar extensões a ele, modificando seu funcionamento. Mas para isso funcionar, não é necessário reinstalar ou modificar seu código fonte. Sua arquitetura foi desenvolvida para poder ser acoplada novos componentes.
>  

![[Pasted image 20240429211329.png]]

Essas acoplações devem ser construídas e aplicadas sem quebrar o funcionamento principal da aplicação, podendo ser desligada e ligada sem afetar o funcionamento core da aplicação.


## Exemplos
* ERPs que existem vários produtos a parte e podem funcionar em conjunto.
* Sistema operacionais