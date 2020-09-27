#!/usr/bin/env node

import program from 'commander';

import { createBook } from './services/createBook.js';
import { watchLogs } from './services/watchLogs.js';

program
  .version('1.0.0')
  .description('Library admin CLI');

program
  .command('add')
  .alias('a')
  .description('Add a book')
  .action(createBook);

program
  .command('watch')
  .alias('w')
  .description('Watch logs')
  .action(watchLogs);

program.parse(process.argv);