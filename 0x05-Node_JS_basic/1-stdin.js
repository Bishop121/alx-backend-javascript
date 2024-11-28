// Display the welcome message
console.log("Welcome to Holberton School, what is your name?");

// Variable to track if user provided input
let nameProvided = false;

// Read input from standard input
process.stdin.on("data", (data) => {
  const name = data.toString().trim(); // Trim the input to remove excess whitespace
  if (name) {
    console.log(`Your name is: ${name}`); // Display the user's name
    nameProvided = true; // Mark that a name was provided
  } else {
    console.log("No name provided."); // Handle empty input
  }
});

// Handle EOF (stream ends without user input)
process.stdin.on("end", () => {
  if (!nameProvided) {
    console.log("No name provided."); // Handle cases where EOF occurs without any input
  }
  console.log("This important software is now closing");
});

