import path from 'path';
import fs from 'fs';
import { v4 as uuidv4 } from 'uuid';
console.log(uuidv4());

const getBooksCollection = () => {
  const pathToBooks = path.resolve('./src/assets/books');
  return JSON.parse(fs.readFileSync(pathToBooks, 'utf-8'));
};

export const bookRepository = {
  findAll: async () => {
    const booksCollection = await getBooksCollection();
    return Object.values(booksCollection);
  },

  findById: async (id) => {
    const booksCollection = await getBooksCollection();
    return booksCollection[id];
  },

  save: async (book) => {
    const booksCollection = await getBooksCollection();

  }
};

bookRepository.save();