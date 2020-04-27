function pwd(callback) {
  // process.stdout.write(process.cwd());
  // process.stdout.write('\nprompt > ');
  const cwd = process.cwd();
  callback(cwd);
}


module.exports = {
  pwd,
}
