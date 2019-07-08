'use strict';



function getYearOfBirth(age) {
  if (age < 0) {
    throw new Error('Age can not be negative');
  }
  return 2019 - age;
}

function createGreeting(name, age) {
  const yob = getYearOfBirth(age);
  return `Hi, my name is ${name} and I\'m ${age} years old. I was born in ${getYearOfBirth(age)}`;
}


try {
  const greeting1 = createGreeting('Mike', 22);
  console.log(greeting1);
} catch(e) {
  console.error(`${e.message}`);
}

