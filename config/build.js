/* eslint-disable no-undef */
const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const package = require('../package.json');
const versionPath = './version/';
const distPath = './dist/vf/engine/';
const engineListPath = versionPath + 'engine.json';
const curEngineName = `engine-v${package.version}.json`;
const curEngineConfigPath = versionPath + curEngineName;

const dateStr = new Date().toLocaleString();

function rmdir(dir, cb) {
    fs.readdir(dir, function (err, files) {
        if(files == null){
            return cb();
        }
        next(0);
        function next(index) {
            if (index == files.length) {
                return fs.rmdir(dir, cb);
            }

            let newPath = path.join(dir, files[index]);
            fs.stat(newPath, function (err, stats) {
                if (err) {
                    console.log(err);
                }
                if (stats && stats.isDirectory()) {
                    rmdir(newPath, () => next(index + 1));
                } else {
                    fs.unlink(newPath, function (err) {
                        if (err) {
                            console.error(err);
                        }
                        next(index + 1);
                    });
                }
            })
        }
    })
}

async function clearDistPath(){
    return new Promise((resolve,reject) => {
        rmdir(distPath,resolve);
    });
    
}


async function buildEngineList() {
    /**
     *  只有 bate 或 release 版本可以进入对外列表
     *  package.json 中的 status 字段，请在自动化环境中配置，本地保持空
     */
    if (true || package.status === 'beta' || package.status === 'release') {
        let engineList = {};
        if (fs.existsSync(engineListPath)) {
            engineList = JSON.parse(fs.readFileSync(engineListPath, { encoding: 'utf8' }));
        } else {
            engineList = { default: '', list: {} };
        }
        engineList.default = package.version;
        engineList.list[package.version] = { "status": package.status,"data": dateStr };
        fs.writeFileSync(engineListPath, JSON.stringify(engineList));
        console.log(`update ${engineListPath}`);
        fs.copyFileSync(engineListPath, distPath + 'engine.json');
        console.log(`copy ${engineListPath} to ${distPath} engine.json`);
    }
}

async function buildEngineConfig() {

    /**
     * 生产当前引擎的配置文件
     */
    const libs = fs.readdirSync('./libs');
    const engineConfig = [];
    libs.forEach(value => {
        if (value === '.DS_Store') {
            return;
        }
        const name = value.substr(0, value.lastIndexOf('-'));
        switch (name) {
            case "pixi":
                engineConfig.push({
                    packageName: 'PIXI',
                    loadIndex: 0,
                    path: value + "/pixi-legacy.min.js"
                });
                break;
            case "pixi-sound":
                engineConfig.push({
                    packageName: 'PIXI.sound',
                    loadIndex: 1,
                    path: value + "/pixi-sound.js"
                });
                break;
            case "vf-polyfills":
                engineConfig.push({
                    packageName: 'Promise',
                    loadIndex: 2,
                    path: value + "/vf-polyfills.js"
                });
                break;
            case "vf-gui":
                engineConfig.push({
                    packageName: 'gui',
                    loadIndex: 3,
                    path: value + "/vf-gui.min.js"
                });
                break;
            default:
                console.log('error not find lib ' + value);
        }
    });

    engineConfig.push({
        packageName: 'vfengine',
        loadIndex: 99,
        path: `vf-engine-v${package.version}/vf-engine.js`,
    });

    engineConfig.sort((a, b) => {
        if (a.loadIndex < b.loadIndex) return -1;
        else if (a.loadIndex > b.loadIndex) return 1;
        else return 0;
    });
    fs.writeFileSync(curEngineConfigPath, JSON.stringify(engineConfig));
    console.log(`update ${curEngineConfigPath}`);
    fs.copyFileSync(curEngineConfigPath, distPath + curEngineName);
    console.log(`copy ${curEngineConfigPath} to ${distPath + curEngineName}`);
}

async function build() {
    await clearDistPath();
    fs.mkdirSync(distPath);
    await buildEngineList();
    await buildEngineConfig();
    console.log('Build Engine: v' + package.version, '\nBuild Date: '+ dateStr, '\n');
}

build();



//if(fs.existsSync(engineListPath))
// 'PIXI': () => {
//     return [(window as any)['PIXI'], 'pixi-v5.2.0/pixi-legacy.min.js'];
// },
// 'PIXI.sound': () => {
//     return [(window as any)['PIXI'] && (window as any)['PIXI']['sound'], 'pixi-sound-v3.0.4/pixi-sound.js'];
// },
// 'Promise': () => {
//     return [(window as any)['Promise'], `vf-engine-v${this._config.engineVersion}/vf-polyfills.js`];
// },
// 'vfgui': () => {
//     return [(window as any)['gui'], './vf-gui-v1.1.17/vf-gui.min.js?v=' + this.fixVersion];
// },
// 'vfengine': () => {
//     return [(window as any)['vfengine'], `vf-engine-v${this._config.engineVersion}/vf-engine.js?v=` + this.fixVersion];
// },




// const publishVFJS =  execSync('webpack --config ./config/webpack.prod.js',{encoding:'utf8'});
// console.log(publishVFJS);

// const version = `
// /*
//  * vf - v${package.version}
//  * Compiled ${new Date()}
//  */
// `;
// // const pixiLegacy = fs.readFileSync('./node_modules/pixi.js-legacy/dist/pixi-legacy.min.js','utf8');
// // const pixiSound = fs.readFileSync('./node_modules/pixi-sound/dist/pixi-sound.js','utf8');
// // const vfgui = fs.readFileSync('./libs/vf-gui.min.js','utf8');
// // const vf = fs.readFileSync('./dist/vf.js');


// fs.writeFileSync(`./dist/vf-${package.version}.min.js`,version+ '\n'+ pixiLegacy+ '\n'+ pixiSound+ '\n'+ vfgui+ '\n'+ vf);