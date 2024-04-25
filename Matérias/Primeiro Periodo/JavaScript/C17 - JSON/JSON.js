const person = {
  name: 'Philippe',
  Age: 30,
  profession: 'Developer',
};

const personJSON = JSON.stringify(person)

console.log(personJSON)
console.log(person);

const personObj = JSON.parse(personJSON)

console.log(personObj)