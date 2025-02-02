const fs = require('fs');

function countStudents(path) {
  let data;
  try {
    data = fs.readFileSync(path, 'utf8');
  } catch {
    throw new Error('Cannot load the database');
  }

  const lines = data.split('\n').filter((line) => line.trim() !== ''); // Remove empty lines
  const students = lines.map((line) => line.split(','));

  const fields = {}; // Object to store students grouped by field
  let totalStudents = 0;

  // Skip the header row (first row) and loop over the students
  for (let i = 1; i < students.length; i++) {
    const [firstname, , , field] = students[i];  // Only extract the necessary values
    if (field) {
      totalStudents++;
      if (!fields[field]) {
        fields[field] = [];
      }
      fields[field].push(firstname);
    }
  }

  // Log the total number of students
  console.log(`Number of students: ${totalStudents}`);

  // Log the number of students in each field
  for (const [field, names] of Object.entries(fields)) {
    console.log(
      `Number of students in ${field}: ${names.length}. List: ${names.join(
        ', '
      )}`
    );
  }
}

module.exports = countStudents;