console.log('starting 310...');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var file = 'greetings.txt';
var user = os.userInfo();
var message = `Hello, ${user.username}!`;
message += `You are ${notes.age}.`;
message += `Additional: ${notes.addNote()}`;
message += `Result: ${notes.add(9, -2)}.`;

fs.appendFile(file, message, (err) => {
  if (err) {
    console.log(`Unable to append to: ${file}`);
    console.log(err);
  }
  else {
    console.log(`Appended to (${file}): ${message}`);
  }
});
