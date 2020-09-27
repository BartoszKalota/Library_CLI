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
  .description('Add a new book to the library')
  .action(createBook);

program
  .command('watch')
  .alias('w')
  .description('Watch the current logs of requested books - real-time watching')
  .action(watchLogs);

program.parse(process.argv);