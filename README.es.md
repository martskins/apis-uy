# API's.uy

[![Build Status](https://travis-ci.org/cherta/apis-uy.svg)](https://travis-ci.org/cherta/apis-uy)

[English](README.md)

Como Uruguay no tiene un registro oficial de API's cada
desarrollador fue creando sus propias API's semi públicas para soportar
sus desarrollos.

Este listado pretende juntar todas esas API's que están dando vueltas y dar una UI que permita testearlas sin tener que instalar `curl`, `postman` o cualquie otra cosa

## Instalar el proyecto

* Clonar el repo: `git clone git@github.com:cherta/apis-uy.git`
* `cd apis-uy`
* Instalar dependencuas: `npm install`
* Correr el dev server: `npm run dev`

## Como agregar mi API

Agregar una API es sencillo:
1. Hacer un fork de este repo
2. Correr `npm install` && `npm run test`
3. Agregar un archivo nuevo al directorio `src/config`
4. Agregar un `require('./your-file-name')` al [src/config/services.js](src/config/services.js)
5. Submitir el pull request

### Qué significa cada atributo?

```js
{
  "id": 2, //Subsecuent id
  "name": "Tipo de Cambio", //Name that appears on the left navigation bar and as a title of the service
  "description": `
Esta API devuelve la cotización actual basada en el sitio del [Banco Central del Uruguay](http://www.bcu.gub.uy/Paginas/Default.aspx).
  `, //Description in md format that appears below the title, beware with spaces because it will understand them as a code block and add a pre to it
  "slug": "currency", //The url slug (not in use now)
  "url": "http://webservice.solcre.com/cotizacion", //The API url
  "type": "jsonp", //The API request type, can be `jsonp` or `rest`
  "icon": "attach_money", //The icon to use on the left bar, can pick any of these: https://www.google.com/design/icons/
  "params": [ //A list of object with name, value and initial state (disabled or enabled)
    { "name": "backdoor", "value": "letmein", "disabled": false }
  ],
  "headers": [ //A list of object with name, value and initial state (disabled or enabled)
  ],
  "method": "GET", //The API HTTP method
  "result": null //Leave this null for now
}


## Deploy?

Los deploys se hacen automáticamente cuando Travis-CI ejecuta los tests, estos no fallan y el push es en el branch `master`.
