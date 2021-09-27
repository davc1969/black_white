# Black & White
## Desafío Latam e-camp. Manejo de librerías yargs y jimp

Este desafío tiene dos partes:
- **index.js**: código que configura el acceso a través de la librería yargs, leyendo la lpinea de comando para que se ejcute el comando ***runbw*** solo cuando se coloque la clave correcta en la línea de comandos
*node index runbw -k 123*

- **blackwhite.js**: Servidor levantado con **express** que muestra una página html donde hay un formulario que pide la dirección de una imagen y un botóon de enviar.  La imagen se envía alservidor donde es modificada con la librería JIMP y se muestra ya reconfigurada en el cliente.

Para este trabajo se usaron las librerías: express, yargs, jimp, fs, url y path

Realizado por *Darío Valenzuela*, septiembre 2021
