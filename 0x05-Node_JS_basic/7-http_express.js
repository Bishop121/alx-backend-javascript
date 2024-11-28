const express = require('express');
const countStudents = require('./3-read_file_async');

const args = process.argv.slice(2);
const DATABASE = args[0];
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  const msg = 'This is the list of our students\n';
  try {
    const students = await countStudents(DATABASE);
    res.status(200).send(`${msg}${students.join('\n')}`);
  } catch (error) {
    res.status(404).send(`${msg}${error.message}`);
  }
});

app.listen(1245);

module.exports = app;
