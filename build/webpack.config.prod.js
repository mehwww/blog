'use strict'

const path = require('path')
const join = path.join.bind(null, __dirname)
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const rucksack = require('rucksack-css')
const baseConfig = require('./webpack.config.base')

const config = Object.assign({}, baseConfig, {
  debug: true,
  devtool: 'source-map',
  entry: {
    app: join('../src/main.js')
  },
  postcss: [
    rucksack({
      autoprefixer: true
    })
  ]
})

config.plugins.push(
  new CleanPlugin([join('../dist')], {root: join('..')}),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"'
    }
  }),
  new ExtractTextPlugin('[name].css', {allChunks: true}),
  new HtmlWebpackPlugin({
    minify: {collapseWhitespace: true},
    template: join('../src/index.html'),
    favicon: join('../assets/favicon.ico')
  }),
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    }
  })
)

config.module.loaders.push({
  test: /\.css$/,
  loader: ExtractTextPlugin.extract('style', 'css?modules&sourceMap&importLoaders=1&localIdentName=[local]___[hash:base64:5]!postcss')
})

module.exports = config
