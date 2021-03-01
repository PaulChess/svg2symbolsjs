const { join } = require('path');
const shell = require('shelljs');
const svgo = require('svgo');

const svgDir = join(__dirname, '../assets/svg');

// 压缩svg文件夹
shell.exec(`svgo ${svgDir}/*.svg`);