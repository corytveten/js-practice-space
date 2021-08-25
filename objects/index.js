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

