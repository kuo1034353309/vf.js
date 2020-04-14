/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpack = require('./webpack.base.js');

webpack.mode = 'development';
webpack.devtool = 'source-map';
webpack.plugins.push(
    new CopyWebpackPlugin([
        { from: path.join(__dirname, '../test/'), to: path.join(__dirname, '../dist/test/') },
    ]),
    // new BundleAnalyzerPlugin({ //可视化调试页面
    //     analyzerMode: 'server',
    //     analyzerHost: '127.0.0.1',
    //     analyzerPort: 8889,
    //     reportFilename: 'report.html',
    //     defaultSizes: 'parsed',
    //     openAnalyzer: true,
    //     generateStatsFile: false,
    //     statsFilename: 'stats.json',
    //     statsOptions: null,
    //     logLevel: 'info'
    // })
);

module.exports = webpack;
