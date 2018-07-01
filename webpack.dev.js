const path = require('path');
const merge = require('webpack-merge');
const config = require('./webpack.config');

module.exports = merge(config, {
	devServer: {
		contentBase: path.join(__dirname, './dist'),
		open: true,
		overlay: true,
		// stats: 'errors-only',
		publicPath: '/',
		compress: true,
		historyApiFallback: true,
		port: 8999
	},
	mode: 'development',
	devtool: 'inline-source-map'
});
