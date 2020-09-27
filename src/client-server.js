import http from 'http';

import ENVS from './config.js';
import { bookRepository } from './repositories/book_repository.js';

const getBooksURL = '/book';
const getBookByIdURL = '/book?bookId=';

const server = http.createServer(async (req, res) => {
  try {
    const { method, url } = req;
    const endpointSupported = method === 'GET' && url.includes(getBooksURL);

    if (!endpointSupported) {
      res.statusCode = 404;
      res.end('Route not found.');
      return;
    }

    if (url === getBooksURL) {
      const booksCollection = await bookRepository.findAll();
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify(booksCollection, undefined, 2));
    }

    res.end();
  } catch (err) {
    res.statusCode = 403;
    res.end('Server error occurred while requesting books');
  }
});

server.listen(ENVS.NODE_PORT, console.log(`Server is up on port ${ENVS.NODE_PORT}`));