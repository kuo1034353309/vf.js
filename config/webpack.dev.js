const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('./webpack.base.js');
webpack.mode = 'development';
webpack.devtool = 'source-map',
webpack.plugins.push(		
	new CopyWebpackPlugin([
		{ from: path.join(__dirname,'../test/'), to:  path.join(__dirname,'../dist/test/') }
	]),
);

module.exports = webpack;