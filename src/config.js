import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve('./src/.env') });

export default {
  NODE_PORT: process.env.NODE_PORT,
  ACCEPTED_GENRES: process.env.ACCEPTED_GENRES
};