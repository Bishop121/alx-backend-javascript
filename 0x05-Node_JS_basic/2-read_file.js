const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');

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
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
