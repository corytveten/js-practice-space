//declaring "use strict" at the top of the script begins strict mode. 
// y = 3.14 will cause an error because y is not declared
//otherwise js will let this go as if let or var was declared.

//keyword const declares a read-only variable 
//common to use all caps for const variable
//const variables cannot be reassigned but const arrays can be mutated

//Object.freeze(object) stops const variable from being mutated
//use when you have an object and you do not want any of the data in the object to change

//any anonymous function cah be turned into an arrow function
const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2]

const squareIntegers = (arr) => {
    const squaredArr = arr.filter(num => Number.isInteger(num) && num > 0).map(x => x * x);
    return squaredArr;
}

console.log(squareIntegers(realNumberArray))

//higher order arrow functions
//rest operator spread operator

//template literals
//backticks are used to create template literals
//allows for multiline strings and variable insertion

//simple fields
const createPerson = (name, age, gender) => ({ name, age, gender })
console.log(createPerson("Zodiac Hasbro", 56, 'male'))