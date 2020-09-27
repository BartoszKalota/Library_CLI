import inquirer from 'inquirer';
const { prompt } = inquirer;

import ENVS from '../config.js';

export const promptNewDataForABook = async () => {
  return await prompt([
    { name: 'title', message: 'What is the title?' },
    { name: 'author', message: 'What is the author?' },
    { name: 'path', message: 'Where is it stored on your hard drive? Provide an absolute path:' },
    {
      name: 'genre',
      message: 'What is the genre?',
      type: 'list',
      choices: ENVS.ACCEPTED_GENRES.split(',')
    }
  ]);
};