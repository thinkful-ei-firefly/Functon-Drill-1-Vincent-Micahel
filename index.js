'use strict';
 
function getYearOfBirth(age) {
    return 2019 - age;
}
function createGreeting(name, age) {
    const yob = getYearOfBirth(age);
    return `Hi, my name is ${name} and I\'m ${age} years old. I was born in ${getYearOfBirth(age)}`;
}
console.log(createGreeting("Vincent", 23));
