import path from 'path';
import fs from 'fs';

const getBooksCollection = () => {
  const pathToBooks = path.resolve('./src/assets/books');
  return JSON.parse(fs.readFileSync(pathToBooks, 'utf-8'));
};

export const bookRepository = {
  findAll: async () => {
    const booksCollection = await getBooksCollection();

  },

  findById: async (id) => {
    const booksCollection = await getBooksCollection();
    return booksCollection[id];
  },

  save: async (book) => {
    const booksCollection = await getBooksCollection();

  }
};

const id = 'eeb22f81-6b3b-40e7-90cd-b083f4a33838';
bookRepository.findById(id);