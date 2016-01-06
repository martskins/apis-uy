var path = require('path')
var webpack = require('webpack')

var rupture = require('rupture')
var jeet = require('jeet')

module.exports = {
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist', 'static'),
    filename: 'bundle.js'
  },
  stylus: {
    use: [rupture(), jeet()]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      NODE_ENV: process.env.NODE_ENV
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      include: path.join(__dirname, 'src')
    },
    {
      test: /\.styl$/,
      loader: 'style-loader!css-loader!stylus-loader'
    }]
  }
}
