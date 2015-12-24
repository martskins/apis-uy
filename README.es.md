# API's.uy

[![Build Status](https://travis-ci.org/cherta/apis-uy.svg?branch=add-tests)](https://travis-ci.org/cherta/apis-uy)

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

## Cómo listar mi API

Agregar una API es bastante fácil, simplemente hay que hacer un fork de este
repo, hacerlo andar localmente con las instrucciones de arriba y agregar una
nueva entrada en [src/config/services.js](src/config/services.js)

```js
{
  "id": 2, //Subsecuent id
  "name": "Tipo de Cambio", //Name that appears on the left navigation bar and as a title of the service
  "description": "Lorem Ipsum", //Description that appears on below the title
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
```

Una vez testeado el resultado manda run pull request a este repo.

## Cómo hacer deploy

Hacer deploy es relativamente fácil, hay que correr el script `npm run deploy` este genera un directorio `dist` y commitea los contenidos al branch `gh-pages`. El sitio público se encuentra en: [http://cherta.github.io/apis-uy](http://cherta.github.io/apis-uy).
