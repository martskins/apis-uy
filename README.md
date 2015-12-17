# API's.uy

Uruguay no tiene un listado oficial de API's a las cuales pedir cosas como el
estado del tiempo, el valor de la moneda, etc.

Este sitio es un directorio que intenta reunir todas las API's de interés para
Uruguay.

## Conozco una API cómo la listo?

* Cada API tiene su propia página dentro de `src/containers`. Crear una página nueva para la api que se quiera listar.
* Usar el component `src/components/Api.js` dentro de esta página
* Linkear a la misma en la botonera dentro de `src/containers/Root.js`.

## ToDo

* Separar mejor las responsabilidades de `src/components/Api`.
* Separar mejor las responsabilidades de `src/containers/Root`
* Aceptar en `src/components/Api` opciones como **jsonp** y dentro de los
parámetros cuales son parte del query string y cuales parámetros normales de un
request.
* Hacer el chrome del sitio responsive haciendo que en tablet y mobile el menú
se oculte.
* Hacer una cli para crear api's nuevas algo así como
`npm run new api --component-name Weather --menu-name Clima` que genere el
esqueleto básico.
* Configurar un CI para hacer deploy una vez que un PR esté aceptado.
* Script de deploy
