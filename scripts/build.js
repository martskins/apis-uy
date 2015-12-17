var webpack = require('webpack')
var fs = require('fs-extra')
var path = require('path')
var config = require('../webpack.production.config')
var compiler = webpack(config)
compiler.run(function(err, stats) {

  if(err) {
    console.log(err)
    return
  }

  fs.copySync(path.join(__dirname, '../', 'index.html'),
    path.join(config.output.path, 'index.html'))

  console.log('Your bundle is ready')

})
