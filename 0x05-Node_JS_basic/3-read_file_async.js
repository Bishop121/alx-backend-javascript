const fs = require('fs');

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

        console.log(`Number of students: ${totalStudents}`);

        for (const [field, names] of Object.entries(fieldGroup)) {
          console.log(
            `Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`,
          );
        }
        resolve();
      }
    });
  });
}

module.exports = countStudents;
