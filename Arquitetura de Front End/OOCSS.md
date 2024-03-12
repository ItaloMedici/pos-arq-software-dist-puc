#css |  [Docs](http://oocss.org/);

Object Oriented CSS (OCSS), é uma metodologia de CSS que aplica a Orientação a Objetivo no CSS. Essa prática visa reduzir a duplicação de código e aumentar a eficiência do uso das estilizações. 
Essa metodologia foi separada em 2 partes:

### Separação de estrutura e visual (Skin)
Opera na idea de modularização e reutilização do código através da separação da estrutura dada pelos elementos de tamanho, altura, posicionamento etc., do visual que sendo as cores, bordas e afins visuais. 

```css
/* Estutura */
.box {
    height: 100px;
    width: 100px;
}

/* Visual */
.box-red {
    background-color: red;
}

.box-green {
    background-color: green;
}

.box-blue {
    background-color: blue;
}
```

Dessa forma, podemos utilizar a estrutura `box` com diferentes visuais;
### Independência entre container e conteúdo
Opera na ideia de quebrar a dependência do elemento com seu container. Exemplo:

```html
<aside>
    <h3 class="title">Titulo :3</h3>
</aside>

<footer>
    <h3 class="title">Titulozinho :3</h3>
</footer>
```

```css
.title {
    color: #e0425d;
    font-family: Georgia, 'Times New Roman', Times, serif;
    line-height: 1;
    text-shadow: rgba(0, 0, 0, .3) 3px 3px 6px;
}

aside .title {
    font-size: 2em;
    text-shadow: rgba(0, 0, 0, .3) 3px 3px 6px;
}

footer .title {
    font-size: 1.5em;
    text-shadow: rgba(0, 0, 0, .3) 2px 2px 4px;
}
```

No exemplo acima, mantemos o estilo do `title` desacoplado do seu container, e as alterações respectivas do container são aplicadas em outro momento, como no `aside` e `footer`