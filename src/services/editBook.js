import inquirer from 'inquirer';
import { bookRepository } from '../repositories/book_repository.js';
const { prompt } = inquirer;

export const editBook = async () => {
  const { id } = await prompt([
    { name: 'id', message: 'What is the ID of the book to edit?' }
  ]);

  await bookRepository.edit(id);
};