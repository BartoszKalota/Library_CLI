import path from 'path';
import fs from 'fs';

const pathToBooks = path.resolve('./src/assets/books');

const getBooksCollection = () => JSON.parse(fs.readFileSync(pathToBooks, 'utf-8'));

const updateBooksCollection = async (db) => {
  await fs.promises.writeFile(pathToBooks, JSON.stringify(db, undefined, 2));
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
      await updateBooksCollection(booksCollection);
      console.log('Book added.');
    } catch (err) {
      console.log(err);
    }
  },

  delete: async (id) => {
    try {
      const bookCollection = await getBooksCollection();
      const updatedCollection = Object.keys(bookCollection)
        .filter(keyId => keyId !== id)
        .reduce((obj, key) => {
          obj[key] = bookCollection[key];
          return obj;
        }, {});

      const newItemsNum = Object.keys(updatedCollection).length;
      const originalItemsNum = Object.keys(bookCollection).length;
      if (originalItemsNum === newItemsNum) {
        console.log('Procedure aborted. There is no book with such ID.');
        return;
      }
      await updateBooksCollection(updatedCollection);
      console.log('Book deleted.');
    } catch (err) {
      console.log(err);
    }
  }
};