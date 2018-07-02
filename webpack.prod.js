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
			chunks: 'all',
			minSize: 25000, // 压缩前的最小模块大小
			minChunks: 1, // 分割前必须共享模块的最小块数为1
			maxAsyncRequests: 5, // 最大的按需(异步)加载次数
			maxInitialRequests: 3, // 最大的初始化加载次数
			automaticNameDelimiter: '~', // 生成名称的分隔符
			name: true, // true将自动根据块和缓存组密钥生成一个名称。
			cacheGroups: {
				vendor: {
					//node_modules内的依赖库
					chunks: 'all',
					test: /[\\/]node_modules[\\/]/,
					name: 'vendor',
					minChunks: 1, //被不同entry引用次数(import),1次的话没必要提取
					maxInitialRequests: 5,
					minSize: 0,
					priority: 100
					// enforce: true?
				},
				common: {
					// ‘src/js’ 下的js文件
					chunks: 'all',
					name: 'common', //生成文件名，依据output规则
					minChunks: 2,
					maxInitialRequests: 5,
					minSize: 0,
					priority: 1
				}
			}
		},
		runtimeChunk: {
			name: 'manifest'
		}
	}
});
