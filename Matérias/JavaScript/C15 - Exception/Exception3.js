function checkPositive(numbers) {
  if (!Array.isArray(numbers)) {
    throw new Error(`The argument must be an Array`);
  }

  const allPositive = numbers.every((num) => num > 0); //Arrow function

  if (!allPositive) {
    throw new Error(`The Array must have only positive numbers`);
  }
  return true;
}

try {
  const Numbers = [1, 2, 3, 4, 5, 6];

  const isPositive = checkPositive(Numbers);

  console.log(isPositive);

} catch (error) {
  console.log(`An erros was occurred: ${error.message}`);
}


