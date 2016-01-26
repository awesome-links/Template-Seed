'use strict';
const path = require('path');

module.exports = {
  entry: ['webpack/hot/dev-server', './app.js'],
  context: __dirname,
  output: {
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /(\.scss|\.css)$/,
        loader: 'style!css?sourceMap&modules&importLoaders=2!postcss!sass?sourceMap!toolbox'
      }
    ]
  },
  resolve: {
    extensions: ['', '.jsx', '.scss', '.js', '.json'],
    modulesDirectories: [
      'node_modules',
      path.resolve(__dirname, './node_modules')
    ]
  }
}