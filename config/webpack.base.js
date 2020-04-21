/* eslint-disable no-undef */
const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const launcherPackage = require('../packages/launcher/package.json');
const playerPackage = require('../packages/player/package.json');
const engineOutPath = '../dist/vf/engine';

module.exports = {
    mode: 'development',
    entry: {},
    module: {
        rules: [
            {
                test: /\.(mp3|svg|png|jpg|gif)$/i,
                loader: 'url-loader',
            },
            {
                test: /\.ts(x?)$/,
                loader: 'ts-loader',
                exclude: /node_modules/,

            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
    output: {
        filename: '[name].js',
        libraryTarget: 'umd',
        path: path.resolve(__dirname),
    },
    plugins: [
        new webpack.ProgressPlugin(),
        new CopyWebpackPlugin([
            { from: path.join(__dirname, '../packages/i18n/'), to:  path.join(__dirname, `${engineOutPath}/i18n/`) },
        ]),
        new CopyWebpackPlugin([
            { from: path.join(__dirname, '../libs/'), to:  path.join(__dirname, `${engineOutPath}/`) },
        ]),
        new webpack.DefinePlugin({
            VFBUILDDATE: JSON.stringify(new Date().toLocaleString()),
            PLAYERRVERION: JSON.stringify(playerPackage.version),
            LAUNCHERVERION: JSON.stringify(launcherPackage.version),
        }),
        // dev 添加
        // new CopyWebpackPlugin([
        // 	{ from: path.join(__dirname,'../test/'), to:  path.join(__dirname,'../dist/test/') }
        // ]),

        // new webpack.HotModuleReplacementPlugin(),
        // new webpack.NamedChunksPlugin()
    ],
};

module.exports.entry[`../packages/player/dist/player`] = './packages/player/src/index.ts';
module.exports.entry[`../packages/launcher/dist/launcher`] = './packages/launcher/src/index.ts';

// global
