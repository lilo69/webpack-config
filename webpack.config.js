const path = require('path');
const glob = require('glob');
const FlowBabelWebpackPlugin = require('flow-babel-webpack-plugin');
module.exports = {
	devtool: 'eval-source-map',
	entry: ['babel-polyfill'].concat(glob.sync('./app/**/*.js')),
	output: {
		path: path.resolve(__dirname, 'public/assets/javascript'),
		filename: 'bundle.js'
	},
	mode: 'development',
	watch: true,
	module: {
		rules: [
			{
				test: /\.scss$/,
				use: [{
					loader: 'style-loader'
				}, {
					loader: 'css-loader'
				}, {
					loader: 'sass-loader'
				}]
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			}
		]
	},
	plugins: [new FlowBabelWebpackPlugin()]
};