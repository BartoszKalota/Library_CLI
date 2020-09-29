import fs from 'fs';

import { bookRepository } from '../repositories/book_repository.js';
import { logger } from '../utils/logger.js';

export const getBook = async (id, accept) => {
  try {
    const book = await bookRepository.findById(id);

    if (!book) {
      return;
    }

    logger(`BookId ${book.id} was requested in format: ${accept}`);

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
    if (accept === 'text/html') {
      return {
        accept,
        content: `
          <html>
            <header>${book.title}</header>
            <body>
              <p>Author: <b>${book.author}</b></p>
              <p>Path: <b>${book.path}</b></p>
              <p>Genre: <b>${book.genre}</b></p>
            </body>
          </html>
        `
      };
    }
  } catch (err) {
    console.log(err);
  }
};