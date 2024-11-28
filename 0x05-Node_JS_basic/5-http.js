const { createServer } = require('http');
const countStudents = require('./3-read_file_async');

const args = process.argv.slice(2);
const DATABASE = args[0]; // process.argv[2]

const port = 1245;
const hostname = 'localhost';

const app = createServer(async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.statusCode = 200;

  const { url } = req;
  if (url === '/') {
    res.write('Hello Holberton School!');
  } else if (url === '/students') {
    res.write('This is the list of our students\n');
    try {
      const students = await countStudents(DATABASE);
      res.end(`${students.join('\n')}`);
    } catch (error) {
      res.end(error.message);
    }
  }
  res.end();
});

app.listen(port, hostname, () => {
// console.log(`server running at ${port} ${hostname}`)
});

module.exports = app;
