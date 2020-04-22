/* eslint-disable no-undef */
const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const launcherPackage = require('../packages/launcher/package.json');
const playerPackage = require('../packages/player/package.json');
const engineOutPath = '../dist/vf/engine';

// eslint-disable-next-line no-unused-vars
let guiVersion = '';
// eslint-disable-next-line no-unused-vars
let vfVersion = '';
const libs = fs.readdirSync(path.join(__dirname, '../libs'));

libs.forEach((value) => {
    if (value.indexOf('gui-v') !== -1) {
        guiVersion = value;
    }
    else if (value.indexOf('vf-v') !== -1) {
        vfVersion = value;
    }
});

if (guiVersion === '' || vfVersion === '') {
    // eslint-disable-next-line no-throw-literal
    throw 'error guiVersion or vfVersion';
}

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
            GUIVERSION: JSON.stringify(guiVersion),
            VFVERSION: JSON.stringify(vfVersion),
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
