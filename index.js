// Importar librería YARGS para manejo de línea de comandos
const yargs = require("yargs");

// Importar librería Child-Process apra ejecutar otro módulo
const child = require("child_process");

// Clave de verificación para ejecutar blackwhite.js
const key = 123;

const argv = yargs
    .command(
        "runbw",
        "Comando para correr aplicación para cambio de color de fotografías",
        {
            key : {
                describe: "clave de acceso",
                demand: true,
                alias: "k"
            }
        },
        (args) => {
            if (args.key == key) {
                child.exec("node blackwhite.js", (err, stdout) => {
                    if(err) {
                        console.log(err.message)
                    }
                    else {
                        console.log("Ejecutando blackwhite.js...");
                        console.log(stdout);
                    }
                })
            }
            else {
                console.log("Credenciales incorrectas, no se puede ejecutar el programa blackwhite.js");
            }
        }
    )
    .help().argv


