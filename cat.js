const fs = require('fs');


function cat(file) {
  fs.readFile(`./${file}`, 'utf8', function(err, data) {
    if (err) {
      console.log('error');
      throw err;
    } else {
      console.log(data);
    }
  })
}


module.exports = {
  cat
}
