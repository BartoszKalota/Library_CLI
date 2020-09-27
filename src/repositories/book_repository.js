import path from 'path';
import fs from 'fs';

const pathToBooks = path.resolve('./src/assets/books');

const getBooksCollection = () => {
  return JSON.parse(fs.readFileSync(pathToBooks, 'utf-8'));
};

export const bookRepository = {
  findAll: async () => {
    try {
      const booksCollection = await getBooksCollection();
      return Object.values(booksCollection);
    } catch (err) {
      console.log(err);
    }
  },

  findById: async (id) => {
    try {
      const booksCollection = await getBooksCollection();
      return booksCollection[id];
    } catch (err) {
      console.log(err);
    }
  },

  save: async (book) => {
    try {
      const booksCollection = await getBooksCollection();
      const signedBook = {
        [`${book.id}`]: book
      };
      Object.assign(booksCollection, signedBook);
      await fs.promises.writeFile(pathToBooks, JSON.stringify(booksCollection, undefined, 2));
    } catch (err) {
      console.log(err);
    }
  }
};