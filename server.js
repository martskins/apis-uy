var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var config = require('./webpack.config')
var port = 3000

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(port, 'localhost', function (error, result) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})

// var express = require('express')
// var app = new express()
// var port = 3000
//
// var compiler = webpack(config)
// app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
// app.use(webpackHotMiddleware(compiler))
// app.use(express.static('public'))
//
// app.get("*", function(req, res) {
//   res.sendFile(__dirname + '/index.html')
// })
//
// app.listen(port, function(error) {
//   if (error) {
//     console.error(error)
//   } else {
//     console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
//   }
// })
