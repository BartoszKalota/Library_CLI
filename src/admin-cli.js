#!/usr/bin/env node

import program from 'commander';

import createBook from './services/createBook.js';

program
  .version('1.0.0')
  .description('Library admin CLI');

program
  .command('add')
  .alias('a')
  .action(createBook);

program.parse(process.argv);