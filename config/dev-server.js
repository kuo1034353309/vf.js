const webpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const path = require('path');
const config = require('./webpack.dev.js');
const options = {
    // 设置基本目录结构
    contentBase: [path.join(__dirname, '../'), path.join(__dirname, '../packages')],
    // 服务器IP地址
    host: '0.0.0.0',
    // 服务端压缩是否开启
    compress: false,
    // 端口
    port: 8088,
    // 自动打开浏览器
    open: false,
};

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

server._watch(`${__dirname}index.html`);
server.listen(8088, '0.0.0.0', () => {
    console.log('dev server listening on port 8088');
});
