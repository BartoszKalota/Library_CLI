import inquirer from 'inquirer';
const { prompt } = inquirer;

export default async () => {
  const { title, author } = await prompt([
    { name: 'title', message: 'What is the title?' },
    { name: 'author', message: 'What is the author?' }
  ]); 
  console.log(title, author);
};