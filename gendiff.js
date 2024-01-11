#!/usr/bin/env node

const commander = require('commander'),
    { prompt } = require('inquirer'),
    chalk = require('chalk'),
    fs = require('fs');

commander
    .version('1.0.0')
    .description('Configuration files creator.');


commander.parse(process.argv);