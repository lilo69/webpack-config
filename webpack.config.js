const webpack = require('webpack');
const path = require('path');
const glob = require('glob');
const FlowBabelWebpackPlugin = require('flow-babel-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const Assets = require('./assets');
module.exports = env => {
	const PROD = env.NODE_ENV;
	return {
		devtool: 'source-map',
		entry: ['babel-polyfill'].concat(glob.sync('./app/**/*.js')),
		output: {
			path: path.resolve(__dirname, 'build'),
			filename: PROD === 'production' ? 'bundle.min.js' : 'bundle.js'
		},
		mode: PROD === 'production' ? 'production' : 'development',
		watch: false,
		module: {
			rules: [
				{
					test: /\.scss$/,
					exclude: /node_modules/,
					use: [{
						loader: 'style-loader'
					}, {
						loader: 'css-loader'
					}, {
						loader: 'sass-loader'
					}]
				},
				{
					test: /\.css$/,
					exclude: /node_modules/,
					use: [{
						loader: 'style-loader'
					}, {
						loader: 'css-loader'
					}]
				},
				{
					test: /app\**\.js$/,
					exclude: /node_modules/,
					use: 'babel-loader'
				},
				{
					test: /\.jsx?$/,
					exclude: /node_modules/,
					use: 'babel-loader'
				},
				{
					test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
					loader: 'file-loader?name=/fonts/[name].[ext]'
				},
				{
					test: /\.(jpg|png|ico)$/,
					loader: 'file-loader?name=/images/[name].[ext]'
				}
			]
		},
		plugins: [
			new FlowBabelWebpackPlugin(),
			new CopyWebpackPlugin(
				Assets.map(asset => {
					return {
						from: path.resolve(__dirname, `./node_modules/${asset}`),
						to: path.resolve(__dirname, './public/assets/plugins')
					};
				})
			)
		]
	};
};