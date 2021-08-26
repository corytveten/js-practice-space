//properties can be deleted from objects using delete

var myDog = {
    'name': 'coder',
    'legs': 4,
    'tails': 1,
    'bark': 'woof'
};

delete myDog.bark;

console.log(myDog)
//the entire 'bark' property is removed

//js has a hasOwnProperty method that can be called on an object with the property name as the argument

//below is a method to create a copy of an object
//var objectCopy = JSON.parse(JSON.stringify(originalObject))

//multidimensional array is another name for nested arrays

//do..while loops
//will always run at least one time and then check the condition
//do is a keyword

const myArray = [];
var i = 10;

do {
    myArray.push(i);
    i++;
} while (i < 5)

console.log(i, myArray);