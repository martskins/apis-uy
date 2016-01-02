export default {
  "id": 1,
  "name": "Tipo de Cambio",
  "description": `
Esta API devuelve la cotización actual basada en el sitio del [Banco Central del Uruguay](http://www.bcu.gub.uy/Paginas/Default.aspx).
    
Las cotizaciones que devuelve son:

* Dólares Americanos
* Pesos Argentinos
* Reales
* Euros
  `,
  "slug": "currency",
  "url": "http://webservice.solcre.com/cotizacion",
  "type": "jsonp",
  "icon": "attach_money",
  "params": [
    { "name": "backdoor", "value": "letmein", "disabled": false }
  ],
  "headers": [
  ],
  "method": "GET",
  "result": null
}
