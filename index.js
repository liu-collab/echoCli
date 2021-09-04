#!/usr/bin/env node
const program = require('commander')
const helpOptions = require('./lib/core/help')
const createCommands = require('./lib/core/create')
//版本号命令
program.version(require('./package.json').version)

//帮助和其他信息
helpOptions()
//创建命令
createCommands()
program.parse(process.argv)

//console.log(program.dest)