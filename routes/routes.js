//importar librería express para activar opcion de router
const express = require("express");

//importar librería fs para manejar los archivos, el que se lee desde la url y el que se envía a la nueva imagen
const fs = require('fs');

// importar librería url para hacer el parse de la url en la cual se pasa la imagen
const url = require('url');

//importar librería jimp para manejo de imágenes
const jimp = require('jimp');

//importar librería jimp para manejo de imágenes
const path = require('path');


// Crear variable de enrutamiento (router)
const router = express.Router();


router.get('/', (req, res) => {
    console.log('estamos en get /2: ', 'resources/index.html', __dirname);
    res.writeHead(200, { 'Content-Type': 'text/html' })

    res.sendFile('index.html');

    //res.end();
});

router.get('/changed', (req, res) => {
    console.log("estamos en cambio", __dirname);
    const params = url.parse(req.url, true).query;

    jimp.read(params.imageName, (err, img) => {
        img
            .resize(350, jimp.AUTO)
            .greyscale()
            .quality(60)
            .writeAsync(path.join(__dirname, '../public/assets/img/newImg.jpg'))
            .then(() => {
                const filePath = path.join(__dirname, '../public/image.html');
                console.log(filePath);
                // res.writeHead(200, { 'Content-Type': 'text/html' })
                 res.sendFile(filePath);
                
                // fs.readFile('newImg.jpg', (err, img) => {
                //     console.log(__dirname);
                //     res.writeHead(200, { 'Content-Type': 'image/jpeg' })
                //     res.end(img);
                //     //res.end();
                // })
            })
    })

    //res.end("Viste el cambio?");
});

module.exports = router;

