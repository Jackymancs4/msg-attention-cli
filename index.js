#!/usr/bin/env node

const program = require('commander')
const attention = require('msg-attention')
const get_args = require('cli-pipe');


let message = ''

program
  .version(require('./package.json').version)

program
  .option('-b, --border <name>', 'overwrite the existing .gitignore')
  .option('-m, --message <text>', 'overwrite the existing .gitignore')
  .option('-c, --color <name>', 'overwrite the existing .gitignore')

  get_args(function (args) {
    program.parse(args)

    if (program.message || program.args.length > 0) {
      message = attention(program.message || program.args.join(' '), program.border, program.color)
      console.log(message)
    }
  });
