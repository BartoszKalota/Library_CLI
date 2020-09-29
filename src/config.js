import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve('./src/.env') });

if (!process.env.NODE_PORT || !process.env.ACCEPTED_GENRES) {
  throw new Error('Missing environmental variable.');
}

export default {
  NODE_PORT: process.env.NODE_PORT,
  ACCEPTED_GENRES: process.env.ACCEPTED_GENRES
};