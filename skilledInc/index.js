// Q1-What will the code below output to the console and why?



// (function(){
//   var a = b = 3 ;
//   var a = b;
//   b = 3;
// })();

// console.log("a defined? " + (typeof a !== 'undefined'));
// console.log("b defined? " + (typeof b !== 'undefined'));

// Answer:  
//  "a defined? true".  false
//  "b defined? false". true

// -------------------------------------------------------


// Q2 - What will the code below output to the console and why?

// var myObject = {
//     foo: "bar",
//     func: function() {
//         var self = this;
//         console.log("outer func:  this.foo = " + this.foo);
//         console.log("outer func:  self.foo = " + self.foo);
//         (function() {
//             console.log("inner func:  this.foo = " + this.foo);
//             console.log("inner func:  self.foo = " + self.foo);
//         }());
//     }
// };
// myObject.func();

// Answer: 
// "outer func:  this.foo = bar"
// "outer func:  self.foo = bar"
// "inner func:  this.foo = undefined"
// "inner func:  self.foo = bar"

// -----------------------------------------------------------

// Q3 -Consider the two functions below. Will they both return the same thing? Why or why not?

// function foo1()
// {
//   return {
//       bar: "hello"
//   };
// }

// function foo2()
// {
//   return
//   {
//       bar: "hello"
//   };
// }

// Answer: 
// "yes, because curly brace is not on the same line as the function declaration. Syntax error" 



// -------------------------------------------------------

// Q4- Write a simple function (less than 160 characters) that returns a boolean indicating whether or not a string is a palindrome string. Palnidrom means the string will read the same from left to right or right to left. Example: level


// Answer:
function palindromeChk(str) {
  const strArr = str.split("");
  const length = strArr.length;
  for (let i=0; i < length; i++) {
      if (!strArr[i] === strArr[strArr.length - (i +1)]) {
          return false
      } else {
          return true
      }
  }

}

function palindromeCheck(str) {
    console.log(str.split('').reverse())
    console.log(str.split(""))
    return str.split('').reverse().join('') === str
}

// ---------------------------------------------

// Q5- Sort the input string in ascending order for canonical total for each set of characters.

// if A=1, B=2, C=3 canonical total will be 6;
// if D=4, E=5, F=6 canonical total will be 15;
// if G=7, H=8, I=9 canonical total will be 24;

// var input = "efg,ghi,abc";

// var ouput = "abc,efg,ghi";

// function canonicalTotal(str) {
//   const strSetArr = str.split(",");
//   strSetArr.forEach(elem => {
//       const subElemArr = elem.split('');
//       const reducedElem = subElemArr.reduce((a,b) => a + b, 0);
//   })
// }
