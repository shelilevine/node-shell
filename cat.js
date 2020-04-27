const fs = require('fs');


function cat(file) {
  fs.readFile(file, 'utf8', function(err, data) {
    if (err) {
      throw err;
    } else {
      console.log(data);
      process.stdout.write('\nprompt > ');
    }
  })
}


module.exports = {
  cat
}
