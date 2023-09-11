function processName(name, callback) {
  if (typeof name != 'string') {
    callback(new Error(`The name most to be a string`));
    return;
  }
  if (name.length === 0 || name.length < 3) {
    callback(new Error(`The field cannot be empty or have less than 3 letters`));
    return;
  }
  callback(null, `Name process successful`);
}

processName(
  123,

  (error, result) => {
    if (error) {
      console.log(`A problem was found: ${error.message}`);
    } else {
      console.log(result);
    }
  }
);
