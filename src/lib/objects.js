const createPerson = (name, age) => {
  // your code here
 const Person = {
   name,
   age
 };
 return Person;
};

const getName = object => {
  // your code here
  return object.name;
};

const getProperty = (property, object) => {
  // your code here
  return object[property];
};

const hasProperty = (property, object) => {
  // your code here
  return object.hasOwnProperty(property);
};

const isOver65 = person => {
  // your code here
  let over65;
  if (person.age > 65) {
    over65 = true;
  } else {
    return false;
  }
  return over65;
};

const getAges = people => {
  // your code here
  const result = people.map(a => a.age);
  return result;
};

const findByName = (name, people) => {
  // your code here
  const result = people.find(n => n.name === name);
  return result;
};

const findHondas = cars => {
  // your code here
  const result = cars.filter(obj => {
    return obj.manufacturer === 'Honda';
  });
  return result;
};

const averageAge = people => {
  // your code here
  const average = people.reduce((total, next) => 
  total + next.age, 0) / people.length;
  return average;
};

const createTalkingPerson = (name, age) => {
  // your code here
  const Person = {
    name,
    age,
    introduce: a => {
      return `Hi ${a}, my name is ${name} and I am ${age}!`;
    }
  };
  return Person;
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
