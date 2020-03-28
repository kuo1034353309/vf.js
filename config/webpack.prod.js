const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('./webpack.base.js');

webpack.mode = 'production';
webpack.plugins.push(
	new UglifyJsPlugin({
		uglifyOptions: {
			output:{
				comments:false
			},
			compress: {
				warnings: false,
				drop_console: false,
				drop_debugger: false
			}
		}
	}),
);
module.exports = webpack;