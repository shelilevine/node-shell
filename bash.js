// console.log(process);

const {pwd} = require('./pwd');
const {ls} = require('./ls');
const {cat} = require('./cat');
const {curl} = require('./curl');



//Output a prompt
process.stdout.write('prompt > ');

//The stdin "data" event fires after a user types in a line
process.stdin.on('data', (data) => {
  const input = data.toString().trim().split(' ');

  const cmd = input[0]; //remove the newline
  const argument = input[1];

  if (cmd === 'pwd') {
    pwd();
  }
  else if (cmd === 'ls') {
    ls();
  }
  else if (cmd === 'cat') {
    cat(argument);
  }
  else if (cmd === 'curl') {
    curl(argument);
  }

})
