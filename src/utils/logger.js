import fs from 'fs';
import path from 'path';

const pathToLogs = path.resolve('./src/assets/logs');

export const logger = async (msg) => {
  const log = `${new Date()}: ${msg}`;
  console.log(log);
  fs.appendFileSync(pathToLogs, `\n${log}`);
};