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
    return;
  } catch (err) {
    console.log(err);
  }
};