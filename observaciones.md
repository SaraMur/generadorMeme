
# Observaciones

Sara, felicitaciones por tu trabajo. Se ve muy bonito, me encanta la paleta de colores, la imagen de fondo, todo se ve muy hermoso y personal. El funcionamiento esta impecable y se nota que hay mucho trabajo acá. 

## Estructura correcta de documento HTML

Te dejé varios comentarios. 

## Respeta el diseño dado

Cumplido salvo por los menus en mobile, que tienen un punto en lugar de una cruz (muy dificil de cliquear...!)

## Respeta el funcionamiento

Cumplido

## Responsive funciona correctamente

Cumplido

## Buena estructura de proyecto

Faltan el README y el favicon. 

## Código bien indentado

Cumplido en HTML y CSS, desprolijo en JS. Todo tu JS se ve desprolijo, hecho a las apuradas. Hay herramientas para VSCode que te ayudan a arreglarlo, te recomiendo prettier, pero tambien tene la costumbre de leer tu codigo y dejar el tabulado bien hecho y los espacios correctos entre las cosas. 


## Comentarios que permiten mejorar la legibilidad del código

Impecables. 

## Uso correcto de etiquetas semánticas

Cumplido con una excepcion. Usás como títulos cosas que no lo son, como los h3 en lugar de label. Aquí creo que hay una confusión: un texto **importante** no es lo mismo que un **título**. Un título encabeza secciones o subsecciones. Un texto importante, como el que sirve para cambiar el texto del meme, no tiene necesariamente que tener una etiqueta h1, h2 o h3, que está reservada para los titulos. Pensá en los títulos desde una perspectiva de diseño: cuáles son las secciones y subsecciones de mi web? Cuales son los títulos de esas secciones? En esta web creo yo hay tres secciones principales: la de editar meme, el panel aside de imagen, y el panel aside de texto. La sección de editar meme no tiene título, pero las otras dos sí: La palabra "texto" y la palabra "imagen". Ahí están tus h2. El resto de los textos, aunque sean importantes, **no** son títulos, y no deberían tener etiquetas como h2 o h3. 

## Buenos nombres de clases

Cumplido en general, aunque tenés la tendencia de usar camelCase para los nombres de clases y de IDs. Comentamos en clase que siempre que esté en html, usamos por convención guiones para separar palabras. Es decir, "boton-texto" en lugar de "botonTexto". camelCase, lo usamos por convención para Javascript. 

Evitá usar cosas como "topcheck1" y "topcheck2", ya que es mejor encontrar nombres descriptivos. Cuando decimos que un nombre de clase debe ser descriptivo, lo decimos en un sentido funcional: qué rol cumple este elemento en el código. Los colores de los elementos, su forma, su estilo, su posición, todas esas cosas pueden cambiar y efectivamente cambian todo el tiempo en las webs que hacemos. La sección que estaba a la arriba mañana estará abajo, por lo que "uno" y "dos" no son buenas guias. 

## Buenos nombres de funciones y variables

Usás `let` y `const` indistintamente, lo cual es un problema. En general siempre preferimos definir las variables como `const` a menos que estemos absolutamente seguras de que esa variable va a cambiar de valor en algún momento. Cuando se trata de variables auxiliares no es problema, pero usar `let` para variables de elementos de DOM es peligroso, ya que abrimos la puerta a que en el futuro alguien cambie el valor de esa variable y nuestro código deje de funcionar. Usá siempre `const` cuando estas definiendo variables para elementos del DOM y cuando estás definiendo funciones. 


## Reutilización de estilos

Hay bastante css innecesario. Recorré tu css con tiempo y ganas, hay muchas ordenes repetidas, innecesarias o confusas. Por ejemplo, tres veces distintas estilas urlTittleControlPanel con casi los mismos estilos. 

## Funciones pequeñas

Cumplido. 

## Accesibilidad

- Te olvidas de usar label, lo reemplazas por h3, que no es lo mismo

- No se si es descuido o falta de tiempo, pero los textos del form no cumplen los requisitos minimos de contraste - son ilegibles. 

## Commits con mensajes adecuados

Cumplido. 

# Nota final: 8

