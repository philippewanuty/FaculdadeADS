function getValue(value) {
  return new Promise((resolve, reject) => {
    if (value >= 10) {
      value += 1;
      resolve(value);
    } else {
      reject(`Unable to obtain value`);
    }
  });
}

function add10(number) {
  return number + 10;
}

function multuply2(number) {
  return number * 2;
}

getValue(15)
  .then((thenValue) => {
    console.log(`Value obtained ${thenValue} `);
    return add10(thenValue);
  })
  .then((then2Value) => {
    console.log(`Through second tratament: ${then2Value}`);
    return multuply2(then2Value);
  })
  .then((then3Value) => {
    console.log(`Through third tratament: ${then3Value}`);
  })
  .catch((error) => {
    console.log(`An error was found: ${error}`);
  });
