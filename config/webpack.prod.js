/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('./webpack.base.js');

webpack.output.filename = '[name].min.js';
webpack.output.libraryTarget = 'umd';
webpack.mode = 'production';
webpack.devtool = 'source-map';

// webpack.plugins.push(
//     new UglifyJsPlugin({
//         uglifyOptions: {
//             output: {
//                 comments: false
//             },
//             compress: {
//                 warnings: false,
//                 drop_console: false,
//                 drop_debugger: false
//             }
//         }
//     }),
// );
module.exports = webpack;
