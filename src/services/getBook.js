import fs from 'fs';

import { bookRepository } from '../repositories/book_repository.js';

export const getBook = async (id, accept) => {
  try {
    const book = await bookRepository.findById(id);

    if (accept === 'application/json') {
      return {
        accept,
        content: JSON.stringify(book)
      };
    }
    if (accept === 'application/pdf') {
      return {
        accept,
        content: fs.createReadStream(book.path)
      };
    }
    return;
  } catch (err) {
    console.log(err);
  }
};