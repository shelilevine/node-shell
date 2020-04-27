const request = require('request');


function curl(url) {
  console.log(url);
  request(url, function(error, response, body) {
    if (error) {
      throw error;
    } else {
      console.log(body);
      // process.stdout.write(body);
      process.stdout.write('\nprompt > ');
    }
   })
}

module.exports = {
  curl
}
