const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpacPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
// 	.BundleAnalyzerPlugin;

// 提取css文件成单独的文件
const extractSass = new ExtractTextPlugin({
	filename: 'styles/[name].[hash].css',
	disable: process.env.NODE_ENV === 'development'
});

const HtmlPlugin = new HtmlWebpacPlugin({
	template: path.resolve(__dirname, './src/index.html'),
	title: 'PWA!!'
});

module.exports = {
	mode: 'development',
	entry: './src/index.jsx',
	output: {
		publicPath: '/',
		filename: '[name].[hash].js',
		path: path.resolve(__dirname, 'dist')
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	performance: {
		hints: process.env.NODE_ENV === 'production' ? 'warning' : false
	},
	module: {
		rules: [
			{
				test: /(\.scss$|\.css)/,
				use: extractSass.extract({
					use: [
						{
							loader: 'css-loader' // 将CSS翻译成CommonJS
						},
						{
							loader: 'sass-loader' // 将Sass编译成CSS
						}
					],
					// 在dev环境下配置这条
					fallback: 'style-loader'
				})
			},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
				// options: {
				// 	presets: ['react']
				// }
			},
			{
				test: /\.jsx?$/,
				loader: 'eslint-loader',
				enforce: 'pre',
				include: [path.join(__dirname, 'src')],
				options: {
					fix: true
				}
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[path][name].[ext]',
							publicPath: 'assets/',
							outputPath: './src/assets/images'
						}
					}
				]
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							limit: 1000,
							outputPath: './src/assets/font',
							name: '[name].[ext]?[hash]'
						}
					}
				]
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(['dist']),
		extractSass,
		HtmlPlugin
		// new BundleAnalyzerPlugin()
	]
};
