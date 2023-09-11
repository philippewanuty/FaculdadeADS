function divider (a,b) {
    if (b === 0){
        throw new Error("Divide by zero is not allowed")
    }
    return a/b
}

try{
  const divisor = divider(10, 0);
  console.log(`Result : ${divisor}`);
}
catch(test){
    console.log(`An exception occurred: ${test.message}`)
}
