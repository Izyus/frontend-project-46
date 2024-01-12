#!/usr/bin/env node

const commander = require('commander'),
    { prompt } = require('inquirer'),
    chalk = require('chalk'),
    fs = require('fs');

commander
    .version('1.0.0')
    .description('Compares two configuration files and shows a difference.')
    .argument('<filepath1>')
    .argument('<filepath2>')
    .option('-f, --format <type>', 'output format' )

commander.parse(process.argv);