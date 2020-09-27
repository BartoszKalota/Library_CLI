import { v4 as uuidv4 } from 'uuid';

import { promptNewDataForABook } from '../utils/promptNewDataForABook.js';
import { bookRepository } from '../repositories/book_repository.js';

export const createBook = async () => {
  // Used as a separate function to avoid code duplication in editBook.js
  const { title, author, path, genre } = await promptNewDataForABook(); 

  const newBook = {
    id: uuidv4(),
    title,
    author,
    path,
    genre
  };
  await bookRepository.save(newBook);
};