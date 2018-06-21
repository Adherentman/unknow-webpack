const path = require('path');
const merge = require('webpack-merge');
const config = require('./webpack.config');

module.exports = merge(config, {
  devServer:{
    contentBase: path.join(__dirname, "./dist"),
    open: true,
    compress: true,
    port: 8999
  },
  mode: 'development',
  devtool: 'inline-source-map',
});
