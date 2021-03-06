import http from 'http';

import ENVS from './config.js';
import { bookRepository } from './repositories/book_repository.js';
import { getBook } from './services/getBook.js';

const getBooksURL = '/book';
const getBookByIdURL = '/book?bookId=';

const server = http.createServer(async (req, res) => {
  try {
    const endpointSupported = req.method === 'GET' && req.url.includes(getBooksURL);

    if (!endpointSupported) {
      res.statusCode = 404;
      res.end('Route not found.');
      return;
    }

    if (req.url === getBooksURL) {
      const booksCollection = await bookRepository.findAll();
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(booksCollection, undefined, 2));
    }

    if (req.url.includes(getBookByIdURL)) {
      const bookId = req.url.replace(getBookByIdURL, '');

      if (!bookId || !req.headers.accept) {
        res.statusCode = 400;
        res.end('BookId or Accept missing.');
      }

      const fetchedCertainBook = await getBook(bookId, req.headers.accept);
      if (!fetchedCertainBook) {
        res.statusCode = 404;
        res.end('Book not found.');
        return;
      }
      
      const { accept: format, content: bookContent } = fetchedCertainBook;
      res.setHeader('Content-Type', format);
      if (format === 'application/json' || format === 'text/html') {
        res.end(bookContent);
      }
      if (format === 'application/pdf') {
        bookContent.pipe(res);
      }
    }
  } catch (err) {
    res.statusCode = 403;
    res.end('Server error occurred.');
  }
});

server.listen(ENVS.NODE_PORT, console.log(`Server is up on port ${ENVS.NODE_PORT}`));