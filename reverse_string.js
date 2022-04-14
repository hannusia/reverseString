// built-in functions
function reverseString1(str) {
    return str.split('').reverse().join('');
}

const reverseString2 = (str) => [...str].reverse().join('');

const reverseString3 = (str) => str.split('').reduce((reversedStr, char) => char + reversedStr, '');

const reverseString4 = (str) => [...str].reduceRight((accumulator, current) => accumulator + current);

// for loops
function reverseString5(str) {
    let reversedStr = '';
    for (var i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    return reversedStr;
}

function reverseString6(str) {
    let reversedStr = '';
    let i;
    for (i = 0; i < str.length; i++) {
        reversedStr = str[i] + reversedStr;
    }
    return reversedStr;
}

function reverseString7(str) {
    let reversedStr = '';
    let char;
    for (char of str) {
        reversedStr = char + reversedStr;
    }
    return reversedStr;
};

function reverseString8(str) {
    var reversedStr = '';
    str.split('').forEach((char) => {
        reversedStr = char + reversedStr;
    });
    return reversedStr;
};

// recursion
function reverseString9(str) {
    if (str === '') {
        return '';
    } else {
        return reverseString10(str.substr(1)) + str.charAt(0);
    }
}

// using stack
function reverseString10(str) {
    let stack = [];
    let len = str.length;
    for(let i = 0; i < len; i++){
       stack.push(str[i]);
    }
    let reverseString = "";
    while (stack.length > 0){
      reverseString += stack.pop();
    }
    return reverseString;
}

// TESTS
const str1 = '?insur op ohs -'
const str2 = '!adzyp insur -'

console.log('1: ', reverseString1(str1))
console.log('2: ', reverseString2(str2))
console.log('3: ', reverseString3(str1))
console.log('4: ', reverseString4(str2))
console.log('5: ', reverseString5(str1))
console.log('6: ', reverseString6(str2))
console.log('7: ', reverseString7(str1))
console.log('8: ', reverseString8(str2))
console.log('9: ', reverseString9(str1))
console.log('10: ', reverseString10(str2))
