
const { createServer } = require('http');

const port = 1245;
const hostname = 'localhost';
const app = createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  // write to the browser with res.write()
  res.write('Hello Holberton School!');

  // end the response
  res.end();
});

app.listen(port, hostname, () => {
});

module.exports = app;

