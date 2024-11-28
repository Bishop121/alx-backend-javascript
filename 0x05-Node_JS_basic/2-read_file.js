const fs = require('fs');

function countStudents(path) {
  try {
    // Read the file synchronously
    const fileContent = fs.readFileSync(path, 'utf8');
    
    // Split the content by line, ignore empty lines at the end
    const lines = fileContent.split('\n').filter(line => line.trim() !== '');
    
    // If there are no students in the file, we stop here
    if (lines.length === 0) {
      throw new Error('Cannot load the database');
    }
    
    // The first line is the header
    const header = lines[0].split(',');
    
    // Initialize a structure to hold student data by field
    const studentsByField = {};

    // Process each student
    lines.slice(1).forEach(line => {
      const studentData = line.split(',');
      const firstName = studentData[0];
      const field = studentData[3];

      // Skip if there's no valid data (some columns might be empty)
      if (!firstName || !field) return;

      // Group students by field
      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }
      studentsByField[field].push(firstName);
    });

    // Total number of students
    const totalStudents = lines.length - 1; // Subtract 1 to exclude the header line
    
    // Log the total number of students
    console.log(`Number of students: ${totalStudents}`);

    // Log the number of students per field and their names
    Object.entries(studentsByField).forEach(([field, students]) => {
      console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
    });

  } catch (error) {
    // If any error occurs (e.g., file not found)
    console.error('Cannot load the database');
  }
}

module.exports = countStudents;

