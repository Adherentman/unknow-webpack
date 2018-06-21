const path = require('path');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const config = require('./webpack.config');

module.exports = merge(config, {
  mode: 'production',
  /**
   * 引用模块大小最小为30kb，引用次数最少为1次，按需加载最大请求次数为5，初始化加载最大请求次数为3的所有模块就行拆分到一个单独的代码块中.
   */
  optimization: {
    splitChunks: {
      chunks: 'async',
      minSize: 30000, // 压缩前的最小模块大小
      minChunks: 1,   // 分割前必须共享模块的最小块数为1
      maxAsyncRequests: 5,  // 最大的按需(异步)加载次数
      maxInitialRequests: 3, // 最大的初始化加载次数
      automaticNameDelimiter: '~',  // 生成名称的分隔符
      name: true, // true将自动根据块和缓存组密钥生成一个名称。
      cacheGroups: {
        vendors: {
          // 创建vendors块，其中包括整个应用程序中来自node_modules的所有代码。
          test: /[\\/]node_modules[\\/]/,
          priority: -10 // 缓存优先级权重
        },
        default: {
          minChunks: 2, // 分割前必须共享模块的最小块数为2
          priority: -20,
          reuseExistingChunk: true, // 重用现有的Chunk
        },
      },
    },
  }
});
