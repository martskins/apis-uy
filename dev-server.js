var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config')
var webpack = require('webpack')
var port = 3000

var compiler = webpack(config)

var server = new WebpackDevServer(compiler, {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
})

server.listen(port, 'localhost', function (err, result) {
  if (err) {
    console.log(err)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
});
