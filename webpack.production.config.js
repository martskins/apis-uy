var path = require('path')
var webpack = require('webpack')

var rupture = require('rupture')
var jeet = require('jeet')

module.exports = {
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  stylus: {
    use: [rupture(), jeet()]
  },
  plugins: [
    new webpack.DefinePlugin({
      NODE_ENV: process.env.NODE_ENV
    })
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    },
    {
      test: /\.styl$/,
      loader: 'style-loader!css-loader!stylus-loader'
    }]
  }
}
