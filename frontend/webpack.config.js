const path = require('path');
const cssNext = require('postcss-cssnext');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	node: {
		fs: "empty"
	},
	entry: [
		'./app/index.js'
	],
	output: {
		path: path.join(__dirname, '/dist'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: 'babel-loader',
			query: {
				presets: ['react', 'es2015', 'es2016']
			}
		}, {
			test: /\.(png|jpg)$/,
			loader: 'url-loader?limit=8192'
		}, { 
			test: /\.json$/, 
			loader: 'json-loader' 
		}
		]
	},
	plugins: [
		new CopyWebpackPlugin([
            { from: './app/index.html' },
			{ from: './app/favicon.png' },
			{ from: './app/assets', to: 'assets' },
			{ from: './app/index.css' }
		])
	],
	devtool: 'eval'
};
