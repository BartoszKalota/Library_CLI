import fs from 'fs';
import path from 'path';

const pathToLogs = path.resolve('./src/assets/logs');

export const watchLogs = () => {
  fs.watchFile(pathToLogs, async () => {
    try {
      const logs = await fs.promises.readFile(pathToLogs, 'utf-8');
      const logToShow = logs
        .split('\n')
        .reverse()[0];
      console.log(logToShow);
    } catch (err) {
      console.log(err);
    }
  });
};