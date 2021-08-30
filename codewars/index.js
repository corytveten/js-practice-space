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
function removeFirstLast(str) {
    const removed = str.substring(1, str.length - 1)
    console.log(removed)
    //return firstOff.replace(firstOff.charAt(firstOff.length -1), '')
}

//sort the odd numbers in ascending order while leaving even at original
function sortOdd(arr) {
    const odds = arr
        .filter(x => x%2)
        .sort((a, b) => a - b);
    
    return arr
        .map(x => x%2 ? odds.shift() : x);
}

function solution(str, strEnd) {
    const comp = str.slice(length - strEnd.length)
    return comp === strEnd;
}