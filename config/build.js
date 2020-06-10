/* eslint-disable no-eq-null */
/* eslint-disable func-names */
/* eslint-disable handle-callback-err */
/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-constant-condition */
/* eslint-disable no-undef */
const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const package = require('../packages/launcher/package.json');
const versionPath = './version/';
const distPath = './dist/vf/engine/';
const engineListPath = `${versionPath}engine.json`;
const curEngineName = `engine-v${package.version}.json`;
const curEngineConfigPath = versionPath + curEngineName;

const dateStr = new Date().toLocaleString();

function rmdir(dir, cb) {
    fs.readdir(dir, function (err, files) {
        if (files ==  null) {
            return cb();
        }
        next(0);
        function next(index) {
            if (index == files.length) {
                return fs.rmdir(dir, cb);
            }

            const newPath = path.join(dir, files[index]);

            fs.stat(newPath, function (err, stats) {
                if (err) {
                    console.log(err);
                }
                if (stats && stats.isDirectory()) {
                    rmdir(newPath, () => next(index + 1));
                }
                else {
                    fs.unlink(newPath, function (err) {
                        if (err) {
                            console.error(err);
                        }
                        next(index + 1);
                    });
                }
            });
        }
    });
}

async function clearDistPath() {
    return new Promise((resolve, reject) => {
        rmdir(distPath, resolve);
    });
}

async function buildEngineList() {
    let engineList = {};

    if (fs.existsSync(engineListPath)) {
        engineList = JSON.parse(fs.readFileSync(engineListPath, { encoding: 'utf8' }));
    }
    else {
        engineList = { default: '', list: {} };
    }

    if (package.status !== 'debug') {
        engineList.default = package.version;
    }
    engineList.list[package.version] = { status: package.status, data: dateStr };
    fs.writeFileSync(engineListPath, JSON.stringify(engineList));
    console.log(`update ${engineListPath}`);
    fs.copyFileSync(engineListPath, `${distPath}engine.json`);
    console.log(`copy ${engineListPath} to ${distPath} engine.json`);
}

async function buildEngineConfig() {
    /**
     * 生产当前引擎的配置文件
     */
    const libs = fs.readdirSync('./libs');
    const engineConfig = [];

    libs.forEach((value) => {
        if (value === '.DS_Store') {
            return;
        }
        const name = value.substr(0, value.indexOf('-'));

        switch (name) {
            case 'vf':
                engineConfig.push({
                    packageName: 'vf',
                    loadIndex: 0,
                    path: `${value}/vf.min.js`,
                });
                break;
            case 'gui':
                engineConfig.push({
                    packageName: 'vf.gui',
                    loadIndex: 3,
                    path: `${value}/gui.min.js`,
                });
                break;
            default:
                console.log(`error not find lib ${value}`);
        }
    });

    engineConfig.push({
        packageName: 'vf.player',
        loadIndex: 99,
        path: `player-v${package.version}/player.min.js`,
    });

    engineConfig.sort((a, b) => {
        if (a.loadIndex < b.loadIndex) return -1;
        else if (a.loadIndex > b.loadIndex) return 1;

        return 0;
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
    console.log(`Build Engine: v${package.version}`, `\nBuild Date: ${dateStr}`, '\n');
}

build();
