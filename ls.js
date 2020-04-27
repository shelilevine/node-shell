const fs = require('fs');

function ls(callback) {
  fs.readdir('./', 'utf8', (err, files) => {
    if (err) {
      // throw err;
      callback(err);
    } else {
      callback(files.join('\n'));
      // process.stdout.write(files.join('\n'))
      // process.stdout.write('\nprompt > ');
    }
  })

}

module.exports = {
  ls
};
