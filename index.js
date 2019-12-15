// Importación de variables de entorno.
require('dotenv').config();

// Importación de dependencias.
const Hapi = require('hapi');
const inert = require('inert');
const path = require('path');

// Instanciación del servidor.
const server = Hapi.server({
    port: process.env.PORT || 3000,
    host: 'localhost',
    routes:{
        files:{
            relativeTo: path.join(__dirname, 'public')
        }
    }
});

// Aplicación.
async function init(){
    await server.register(inert);
    
    // Creación de la ruta.
    server.route({
        method: 'GET',
        path: '/home',
        handler: (request, h) =>{
            return h.file('index.html')
        }
    });

    server.route({
        method: 'GET',
        path: '/{param*}',
        handler: {
            directory: {
                path: '.',
                index: [
                    'index.html'
                ]
            }
        }
    });

    await server.start()
        .then(()=>{
            console.log(`[SERVER] Ready on: ${server.info.uri}`);
        })
        .catch(error => {
            console.log(`[ERROR] ${error}`);
            process.end(1);
        });
};

// Ejecución de la aplicación.
init();