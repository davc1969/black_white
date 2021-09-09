//importar librería express para activar opcion de router
const express = require("express");

//importar librería fs para manejar los archivos, el que se lee desde la url y el que se envía a la nueva imagen
const fs = require('fs');

// importar librería url para hacer el parse de la url en la cual se pasa la imagen
const url = require('url');

//importar librería jimp para manejo de imágenes
const jimp = require('jimp');

// Crear variable de enrutamiento (router)
const router = express.Router();


router.get('/', (req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    console.log('estamos en get /2: ', 'resources/index.html');

    res.sendFile('index.html');

    res.end();
});

router.get('/changed', (req, res) => {
    console.log("estamos en cambio");
    const params = url.parse(req.url, true).query;
    
    jimp.read(params.imageName, (err, img) => {
        img
            .resize(350, jimp.AUTO)
            .greyscale()
            .quality(60)
            .writeAsync('newImg.jpg')
            .then(() => {
                fs.readFile('newImg.jpg', (err, img) => {
                    res.writeHead(200, { 'Content-Type': 'image/jpeg' })
                    res.end(img)
                })
            })
    })

    //res.end("Viste el cambio?");
});

module.exports = router;

