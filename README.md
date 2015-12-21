# API's.uy

Uruguay no tiene un listado oficial de API's a las cuales pedir cosas como el
estado del tiempo, el valor de la moneda, etc.

Este sitio es un directorio que intenta reunir todas las API's de interés para
Uruguay.

## Conozco una API cómo la listo?

* Cada API tiene su propia página dentro de `src/containers`. Crear una página nueva para la api que se quiera listar.
* Usar el component `src/components/Api.js` dentro de esta página
* Linkear a la misma en la botonera dentro de `src/containers/Root.js`.

## Hacerlo andar local

* Instalar node & npm
* `git clone git@github.com:cherta/apis-uy.git`
* `cd apis-uy`
* `npm install`
* `npm run dev`

## Hacer deploy

Usando el comando `npm run compile` se genera una carpeta `dist` que luego se
versiona en el branch `gh-pages` del repositorio y queda disponible en [http://cherta.github.io/apis-uy](http://cherta.github.io/apis-uy).

## ToDo

* Hacer una cli para crear api's nuevas algo así como
`npm run new api --component-name Weather --menu-name Clima` que genere el
esqueleto básico.
* Configurar un CI para hacer deploy una vez que un PR esté aceptado.
* Script de deploy
