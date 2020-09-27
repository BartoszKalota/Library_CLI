import inquirer from 'inquirer';
import { bookRepository } from '../repositories/book_repository.js';
const { prompt } = inquirer;

export const deleteBook = async () => {
  const { id } = await prompt([
    { name: 'id', message: 'What is the ID of the book to delete?' }
  ]);

  await bookRepository.delete(id);
};