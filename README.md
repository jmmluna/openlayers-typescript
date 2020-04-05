# OpenLayers-TypeScript
Ejemplo básico de OpenLayers con TypeScript

**OpenLayers-TypeScript** es un proyecto NodeJS cuyo objetivo es realizar una prueba de concepto (PoC) de una aplicación web basada en OpenLayers usando tipado fuerte con TypeScript.

## Características principales

- OpenLayers 6.3.0. 
- TypeScript 3.8.3.
- ParcelJS 1.12.4.

## Requerimientos
Para comenzar a desarrollar sobre el proyecto, necesitará tener Node.js instalado en su entorno. Para **OpenLayers-TypeScript** se han utilizado las siguientes versiones: 

    $ node --version
    v12.16.1

    $ npm --version
    6.13.4

## Instalación
Como punto de partida es necesario realizar un clonado del proyecto. Una vez disponible el código fuente, habrá que instalar las dependencias requeridas del proyecto, para lo cual bastará con ejecutar el siguiente comando:

    npm install

## Entorno de desarrollo
Para realizar las pruebas pertinentes del software hay que arrancar el servidor de desarrollo de Node.js, ejecutando la siguiente instrucción:

    npm start

Una vez iniciado el entorno de desarrollo, se podrá acceder al mismo mediante el navegador en la siguiente dirección:

    http://127.0.0.1:9000
    
## Puesta en producción
Si se desea realizar el despliegue, será necesario construir el software mediante el siguiente comando:

    npm run build

Como resultado se creará una carpeta con el nombre **dist** que contiene todos los ficheros necesarios para realizar la puesta en producción.
