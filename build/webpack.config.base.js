'use strict'

const path = require('path')
const join = path.join.bind(null, __dirname)

module.exports = {
  target: 'web',
  output: {
    path: join('../dist'),
    filename: '[name].js'
  },
  plugins: [],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      loaders: ['babel'],
      include: join('../src')
    }]
  },
  resolve: {
    modulesDirectories: [
      'src',
      'node_modules'
    ],
    extensions: ['', '.json', '.js', '.jsx']
  }
}
