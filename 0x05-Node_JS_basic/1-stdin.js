process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Listen for user input
process.stdin.on('data', (data) => {
  const name = data.toString().trim(); // Convert buffer to string and trim whitespace
  process.stdout.write(`Your name is: ${name}\n`);
  process.exit();
});

// Handle EOF (Ctrl+D or stream closure)
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
