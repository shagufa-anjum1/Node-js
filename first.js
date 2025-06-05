const fs = require('fs');

console.log("shagufa anjum channel is the best ! ");

fs.writeFile("output.txt", "Writing file", (err) => {
  if(err) console.log("Error Occurred");
  else console.log('File Written Successfully');
});