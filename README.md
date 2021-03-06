# API's.uy

[![Build Status](https://travis-ci.org/cherta/apis-uy.svg)](https://travis-ci.org/cherta/apis-uy)

[Español](README.es.md)

Uruguay has no official API's listing, one common thing I've noticed is
that developers had come with a variety range of semi-public API's to support
their apps.

This listing is an effort to aggregate all the sparse information and allow
developers to test other developers API's without needing to use `curl`,
`postman` or anything else.

## Installing locally

* Clone this repo: `git clone git@github.com:cherta/apis-uy.git`
* `cd apis-uy`
* Install dependencies with: `npm install`
* Run the dev server with: `npm run dev`

## How to list my API

Adding an API is fairly easy, just:
1. Fork this repo
2. `npm install` && `npm run test`
3. Add a new file to the `src/config` folder
4. Add a `require('./your-file-name')` to [src/config/services.js](src/config/services.js)
5. Submit a pull request

### What each field means

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
```

## Deploy?

Travis-CI automatically deploys the app when pushing to `master` and all tests pass.
