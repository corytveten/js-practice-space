// function reverseString(str) {
//   // const revArr = str.split("").reverse();
//   // return revArr.join(''); 
//   return str.split("").reverse().join("");
// }

// console.log(reverseString('world'))

// function songDecoder(wubStr) {
//   const lyricArr = wubStr.split("WUB").filter(elem => {
//     return elem.length > 0
//   })
//   return lyricArr.join(" ")
// }

// console.log(songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB"))

// function dnaStrand(str) {
//     const chars = {'A':'T', 'T':'A', 'G':'C', 'C':'G'}
//     // const splitStr = str.split('');
//     return str.replace(/[ATGC]/g, m => chars[m])
    
//   }
  
//   dnaStrand('ATTGC')

//remove first and last characters of a string
// function removeFirstLast(str) {
//     const removed = str.substring(1, str.length - 1)
//     console.log(removed)
//     //return firstOff.replace(firstOff.charAt(firstOff.length -1), '')
// }

// //sort the odd numbers in ascending order while leaving even at original
// function sortOdd(arr) {
//     const odds = arr
//         .filter(x => x%2)
//         .sort((a, b) => a - b);
    
//     return arr
//         .map(x => x%2 ? odds.shift() : x);
// }

// function solution(str, strEnd) {
//     const comp = str.slice(length - strEnd.length)
//     return comp === strEnd;
// }

// function getCount(str) {
//     let vowelsCount = 0;
//     vowelsCount = str.match(/[aeiou]/g).length
//     return vowelsCount
// }

function arithmetic(a, b, operator) {
    const symbolConverter = {
        'add': function (x, y) { return x + y },
        'subtract': function (x, y) { return x - y },
        'multiply': function (x, y) { return x * y },
        'divide': function (x, y) { return x / y }
    }
    return symbolConverter[operator](a, b)
    // if (operator === 'add') {
    //     return a + b;
    // } else if (operator === 'subtract') {
    //     return a - b;
    // } else if (operator === 'multiply') {
    //     return a * b;
    // } else if (operator === 'divide') {
    //     return a / b;
    // } else {
    //     return 'enter an operator'
    // }
}

//the wave
function wave(str) {
    const waveArr = []
    for (let i=0; i<str.length; i++) {
        if (str.charAt(i) === " ") {
            null
        } else {
            waveArr.push(str.slice(0, i) + str.charAt(i).toUpperCase() + str.slice(i+1))
        }
    };
    return waveArr.join(" ")
}

//increments a string by 1 to create a new string 
function incrementString (strng) {
    if (isNaN(strng.slice(-1))) {
        return strng + 1 
    } else {
        strArr = strng.split('');
        const firstNumIndex = strArr.indexOf(strArr.find(x => !isNaN(x)));
        const lastNum = parseInt(strng.slice(firstNumIndex - strng.length)) + 1;
        return strng.slice(0, firstNumIndex) + lastNum
    }
  }

function timer() {
    for (let i=0; i<20; i++) {
        (function(i) {
            setTimeout(function() {
                console.log(i);
        }, 1000);
    })(i);
}
}

timer()

function divisors(num) {
    const divArr = []
   for (let i=1; i<=num; i++) {
        if (num % i === 0) {
            divArr.push(i)
        } 
        console.log(divArr)
        return divArr.length
   } 
}

function factorial(n) {
    let answer = 1;
    if (n == 0 || n == 1){
      return answer;
    }else{
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }  
  }