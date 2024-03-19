#css 
### CSS e Performance
O css está diretamente ligado a perfomance da aplicação, notando os seguintes pontos:
 * Override de estilos é custoso para o browser
 * Evitar uso de  `!important`, diminui o número de re-render na fase de "painting"
### CSS e Escala
* Manter a consistência de estilos entre as páginas e de suma importância
* Editar estilos antigos não deve ser custoso
* Reutilizar estilos já criados é extremamente importante

### Colisão de classes
* Ao dividir múltiplos arquivos, vamos decorar todos os nomes para evitar repeti-los em arquivos diferentes?
* O nome das classes e ID dizem respeito ao que realmente fazem?

## Style-guides e metodologias
* [[BEM]]: Block - Element - Modifier
* [[OOCSS]]: Object-Oriented CSS
* [[CSS Funcional]]: Tachyons e Tailwind;
* [[CSS-in-JS]]
* [[Pré-processadores CSS]]