# Backend con Hapi

### Framework de NodeJS
**¿Qué es Hapi?**
* Framework de nodejs para crear aplicaciones y servicios web.
* Diseñado pensando en aplicativos modularizados.
* Filosofia que contempla la separación de la configuración y la logica de negocio.
* Opinionado.

**Principales usos**
* Aplicativos web
* APIs REST
* APIs GraphQL
* Proxies HTTP
* Integrador de multiples backends

**Prerrequisitos**
* Conocimientos basicos de Node.
* Conocimientos basicos de aplicativos web.
* Deseable experiencia minima con Express.
* Deseable experiencia con manejo de asincronia en Node con Async/Await.
* Deseable estar familiarizado con Firebase.

### Breve historia y estado actual
**Creación**
* Creado por Eran Hammer- Autor lider y editor de la especificación Oauth.
* Nombre derivador de HTTP API server.
* Creado en Walmert labs por el equipo mobile.
* Solución a los picos de alto tráfico en el Black Friday.

**Evolución**
* Creado inicialmente como un middleware de Express
* Reemplazo de Express con Director.
* Planteamiento filosófico de que es mejor tener configuracion que código.
* Recientemente rediseñado para usar los últimos avances del core de NodeJS.

**Versionamiento**
* Uso de Semantic versioning. (semver)
* Changelog automatizado publicado en el sitio.
* 17 versiones major hasta ahora.
* Versión actual 17.5.5 .

### Conceptos principales de Hapi y creación de nuestro primer servidor.
**Servidor**
Unidad Básica y principal del framework

    // Importación de la dependencia.
    const Hapi = require('hapi');

    // Instanciación del servidor con Hapi.
    const server = Hapi.server({
        port: 3000,
        host: "localhost"
    });

**Ruta**
Define puntos de interacción para el aplicativo.

    server.route({
        method: "GET",
        path: "/hola",
        handler: (request, h)=>{
            return 'Hola Mundo'
        }
    });

**Parametros de la ruta**
* Method : Método HTTP por el cual un Navegador o un cliente debe acceder a la ruta.
* Path : Define parte de la URL que será accedida por el cliente.
* Handler : Función que se ejecuta cuando se accede a una ruta.

### El objeto h, response y sus herramientas.
Response

**El objeto H:**

Segundo argumento del handler, es una colección de utilidades y propiedades relativas a enviar información de respuesta.

**Métodos básicos**
* *h.response* : Crea un objeto de respuesta.
* *h.redirect* : Redirecciona una petición.

**El Objeto Response**

Generado por el mpetodo **h.response**, permite definir las propiedades de larespuesta al **Navegador** o al **Cliente** que realizó la petición.

**Métodos Basicos**
* *response.header* : Configura un encabezado en la respuesta.
* *response.type* : Permite definir el tipo mime de la respuesta.
* *response.code* : Permite definir el código de estado de la respuesta. (200, 300, 400)

### Uso de plugins / Contenido estaticos.
Plugin *inert* Permite servir archivos y agrega funcionalidad al objeto h.

### Plantillas con Handlebars.

Las plantillas son generalmente archivos html con marcadores particulares que permiten la inserción de variables y la ejecución de algunas instrucciones de programación, antes de ser renderizados. Esta interpretación previa la realiza un plugin conocido como motor de plantillas, como es el caso de Handlebars.
