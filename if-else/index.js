function orderMyLogic(val) {
    if (val < 10) {
        return 'Less than 10';
    } else if (val < 5) {
        return 'less thank 5';
    } else {
        return 'greater than or equal to 10'
    }
}

console.log(orderMyLogic(2))

//order is important if val 2, function will return 'less than 10', not 'less than 5'. if first condition is met, the function will not run the rest.

function testSize(num) {
    if (num < 5) {
        return 'Tiny';
    } else if (num < 10) {
        return 'Small';
    } else if (num < 15) {
        return 'Medium'
    }
}

console.log(testSize(1));
console.log(testSize(9));
console.log(testSize(11));

const scoreNames = ['hole-in-one', 'eagle', 'birdie', 'par', 'bogey', 'double bogey', 'triple bogey']
function golfScore(par, strokes) {
    if (strokes === 1) {
        return scoreNames[0];
    } else if (par - strokes === 2) {
        return scoreNames[1];
    } else if (par - strokes === 1) {
        return scoreNames[2];
    } else if (par === strokes) {
        return scoreNames[3];
    } else if (par - strokes === -1) {
        return scoreNames[4];
    } else if (par - strokes === -2) {
        return scoreNames[5]
    }
}

console.log(golfScore(3, 1))


//switch statement

function caseInSwitch(val) {
    let answer = "";
    switch (val) {
        case 1:
            answer = "one";
            break;
        case 2:
            answer = 'two';
            break;
        case 3: 
            answer = 'three';
            break;
        case 4:
        case 5:
        case 6:
            answer = 'more than three less than seven';
            break;
        default:
            answer = 'something else';
            break;
    }
    return answer
}

//omitting break statement allows multiple cases to provide the same result


// if else is not always needed

function isLess(a, b) {
    return a < b;
}

//returns true
console.log(isLess(10, 15))
//returns false
console.log(isLess(20, 15))

