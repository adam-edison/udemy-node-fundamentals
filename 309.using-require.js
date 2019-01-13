const fs = require('fs');
const os = require('os');

var file = 'greetings.txt';
var user = os.userInfo();
var message = `Hello, ${user.username}!`;

fs.appendFile(file, message, (err) => {
  if (err) {
    console.log(`Unable to append to: ${file}`);
    console.log(err);
  }
  else {
    console.log(`Appended to (${file}): ${message}`);
  }
});
