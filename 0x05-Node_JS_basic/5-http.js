const fs = require('fs');
const { createServer } = require('http');

const dbPath = process.argv[2];
const port = 1245;

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
      } else {
        const lines = data.split('\n').filter((line) => line.trim() !== '');
        lines.shift();

        let totalStudents = 0;
        const fieldGroup = {};

        for (const line of lines) {
          const [firstname, lastname, age, field] = line.split(',');

          if (firstname && lastname && age && field) {
            if (!fieldGroup[field]) fieldGroup[field] = [];
            fieldGroup[field].push(firstname);

            totalStudents += 1;
          }
        }

        let output = `Number of students: ${totalStudents}\n`;

        for (const [field, names] of Object.entries(fieldGroup)) {
          output += `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}\n`;
        }
        resolve(output.trim());
      }
    });
  });
}

const app = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  const { url } = req;

  if (url === '/') res.end('Hello Holberton School!');
  if (url === '/students') {
    res.write('This is the list of our students\n');
    countStudents(dbPath)
      .then((output) => {
        res.end(output);
      })
      .catch((error) => {
        res.end(`${error.message}`);
      });
  } else {
    res.end('Not found');
  }
});

app.listen(port);

module.exports = app;
