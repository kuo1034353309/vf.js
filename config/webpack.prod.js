/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
// const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const path = require('path');
const FileManagerPlugin = require('filemanager-webpack-plugin');
const webpack = require('./webpack.base.js');
const playerPackage = require('../packages/player/package.json');
const launcherPackage = require('../packages/launcher/package.json');

webpack.output.filename = '[name].min.js';
webpack.output.libraryTarget = 'umd';
webpack.mode = 'production';
// webpack.devtool = 'source-map';

webpack.plugins.push(
    new FileManagerPlugin(
        {
            onEnd: {
                copy: [
                    { source: path.join(__dirname, '../packages/player/dist/'), destination: path.join(__dirname, `../dist/vf/engine/player-v${playerPackage.version}/`) },
                    { source: path.join(__dirname, '../packages/launcher/dist/'), destination: path.join(__dirname, `../dist/vf/engine/launcher-v${launcherPackage.version}/`) },
                ],
            },
        },
    ),
    // new UglifyJsPlugin({
    //     uglifyOptions: {
    //         output: {
    //             comments: false
    //         },
    //         compress: {
    //             warnings: false,
    //             drop_console: false,
    //             drop_debugger: false
    //         }
    //     }
    // }),
);
module.exports = webpack;
