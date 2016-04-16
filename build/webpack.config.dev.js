'use strict'

const path = require('path')
const join = path.join.bind(null, __dirname)
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const rucksack = require('rucksack-css')
const baseConfig = require('./webpack.config.base')

const config = Object.assign({}, baseConfig, {
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: ['webpack-hot-middleware/client', join('../src/main.js')]
  },
  postcss: [
    rucksack({
      autoprefixer: true
    })
  ]
})

config.plugins.push(
  new webpack.HotModuleReplacementPlugin(),
  new webpack.NoErrorsPlugin(),
  new HtmlWebpackPlugin({
    template: join('../src/index.html'),
    favicon: join('../assets/favicon.ico')
  })
)

config.module.loaders.push({
  test: /\.css$/,
  loaders: [
    'style-loader',
    'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
    'postcss-loader'
  ]
})

// config.module.loaders.push({
//   test: /\.global\.css$/,
//   loaders: [
//     'style-loader',
//     'css-loader?sourceMap'
//   ]
// }, {
//   test: /^((?!\.global).)*\.css$/,
//   loaders: [
//     'style-loader',
//     'css-loader?modules&sourceMap&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
//   ]
// })

module.exports = config
