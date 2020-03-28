const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const packages = require("../package.json");
const engineOutPath = '../dist/vf/engine';

module.exports = {
	mode: 'development',//production,development
	entry: {
		'vf-polyfills': './src/polyfills.ts',
		'vf-engine': './src/Engine.ts',
		'vf': './packages/loader/VF.ts'
	},
	module: {
		rules: [
			{
				test: /\.(mp3|svg|png|jpg|gif)$/i,
				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 8192,
						},
					},
				],
			},
			{
				test: /\.ts(x?)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'ts-loader'
					}
				]
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				//include: /libs/,
				use: [
					{
						loader: 'babel-loader',
						options: {
							filename: '../.babelrc',
						}
					}
				]
			}
		]
	},
	resolve: {
		extensions: ['.ts', '.js']
	},
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, `${engineOutPath}/vf-engine-v${packages.version}/`),
	},
	plugins:[
		new webpack.ProgressPlugin(),
		new CopyWebpackPlugin([
			{ from: path.join(__dirname,'../packages/i18n/'), to:  path.join(__dirname,`${engineOutPath}/i18n/`) }
		]),
		new CopyWebpackPlugin([
			{ from: path.join(__dirname,'../libs/'), to:  path.join(__dirname,`${engineOutPath}/`) }
		]),
		new CopyWebpackPlugin([
			{ from: path.join(__dirname,'../favicon.ico'), to:  path.join(__dirname,'../dist/') }
		]),
		new CopyWebpackPlugin([
			{ from: path.join(__dirname,'../index.html'), to:  path.join(__dirname,'../dist/') }
		]),
		new webpack.DefinePlugin({
			VFBUILDDATE: JSON.stringify(new Date().toLocaleString()),
		  }),
		// dev 添加
		// new CopyWebpackPlugin([
		// 	{ from: path.join(__dirname,'../test/'), to:  path.join(__dirname,'../dist/test/') }
		// ]),

		//new webpack.HotModuleReplacementPlugin(),
		// new webpack.NamedChunksPlugin()
	],
};

//global