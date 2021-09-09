// importar librería de express para crear el servidor
const express = require('express');

// importar librería url para hacer el parse de la url en la cual se pasa la imagen
const url = require('url');

//importar librería fs para manejar los archivos, el que se lee desde la url y el que se envía a la nueva imagen
const fs = require('fs');

//importar librería jimp para manejo de imágenes
const jimp = require('jimp');

//importar librería path para manejar apropiadamente las llamadas a directorios
const path = require('path')


const app = express()
const PORT = process.env.PORT || 4000;

//Importamos las rutas que están cargadas en el archivo de enrutamiento en la carpeta routes
const routes = require('./routes/routes');
const exp = require('constants');

// Vamos a fijar una ruta para archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));


// Ahora usamos la lista de enrutamiento ya definida
app.use(routes);


app.listen(PORT, () => {
    console.log(`Active server on port: ${PORT}`);
});
