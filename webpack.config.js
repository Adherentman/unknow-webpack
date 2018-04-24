const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpacPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

// 提取css文件成单独的文件
const extractSass = new ExtractTextPlugin({
  filename: 'styles/[name].[hash].css',
  disable: process.env.NODE_ENV === 'development',
});

const HtmlPlugin = new HtmlWebpacPlugin({
  template: path.resolve(__dirname, './src/index.html'),
  title: 'Simple FE',
});

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [
            {
              loader: 'css-loader', // 将CSS翻译成CommonJS
            },
            {
              loader: 'sass-loader', // 将Sass编译成CSS
            },
          ],
          // 在dev环境下配置这条
          fallback: 'style-loader',
        }),
      },
      {
        test: /(\.jsx|\.js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['env', 'react'],
        },
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              publicPath: 'assets/',
            },
          },
        ],
      },
    ],
  },
  plugins: [new CleanWebpackPlugin(['dist']), extractSass, HtmlPlugin],
};
