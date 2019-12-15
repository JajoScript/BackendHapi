// Importación de variables de entorno.
require('dotenv').config();

// Importación de dependencias.
const Hapi = require('hapi');

// Instanciación del servidor.
const server = Hapi.server({
    port: process.env.PORT || 3000,
    host: 'localhost'
});

// Aplicación.
async function init(){
    // Creación de la ruta.
    server.route({
        method: 'GET',
        path: '/',
        handler: (request, response) =>{
            return "Hola mundo";
        }
    });

    await server.start()
        .then(()=>{
            console.log(`[SERVER] Ready on: ${server.info.uri}`)
        })
        .catch(error => {
            console.log(`[ERROR] ${error}`);
            process.end(1)
        });
};

// Ejecución de la aplicación.
init();