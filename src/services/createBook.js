import inquirer from 'inquirer';
const { prompt } = inquirer;
import { v4 as uuidv4 } from 'uuid';

import ENVS from '../config.js';
import { bookRepository } from '../repositories/book_repository.js';

export const createBook = async () => {
  const { title, author, path, genre } = await prompt([
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

  const newBook = {
    id: uuidv4(),
    title,
    author,
    path,
    genre
  };
  await bookRepository.save(newBook);
};