// VERBAL QUESTIONS 

// 1 Parameters are named variables put in a function to be used later. Arguments are parameters with actual values, used when the function is called.

// 2 Return allows you to "return" a value from a function, allowing the value to be used. Console.log only writes the values in text; it doesn't define anything.

// 3 Functions being able to return values gives us the ability to re-use functions to call them later in loops, functions, etc. Thus allowing us to have to write much short code, and not having to repeat ourselves.

////////////////////////////////////////////////////////

// PALINDROME AGAIN

function checkPalindrome (string) {
    const reversed = string.toUpperCase().split("").reverse().join("");
    if (reversed === string.toUpperCase()) {
        return true;
    } else {
        return false;
    }
}
console.log(checkPalindrome('Radar'));
console.log(checkPalindrome("Borscht"));

////////////////////////////////////////////////////////

// 3 Digit Sum

function sumDigits (num) {
    const myArray = [];
    let digit = num.toString();
    let sum = 0;

    for (let i = 0; i <digit.length; i++) {
        myArray[i] = digit.charAt(i);
    };
    for (let i = 0; i < digit.length; i++) {
        sum += parseInt(myArray[i]);
    }
    console.log(sum);
};

sumDigits(42);

////////////////////////////////////////////////////////

//4 Pythogoras

function calculateSide (sideA, sideB) {
    let sideC = 0;
    sideC = Math.sqrt(Math.pow(sideA,2) + Math.pow(sideB,2));
    return console.log(sideC);
}
calculateSide(10,20);

////////////////////////////////////////////////////////

// 5 Sum Array
numArray = [1, 2, 3, 4, 5, 6];
function sumArray (arr) {
    let sum = 0;

    for (i = 0; i < numArray.length; i++) {
        sum += numArray[i];
    };
    console.log(sum);
}
sumArray(numArray);

// 6 Prime Numbers 

////////////////////////////////////////////////////////

//Step One
function checkPrime (num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};
console.log(checkPrime(7));

//Step Two
function printPrimes (nums) {
    for (let i = 0; i < nums; i++){
        if (checkPrime(i)) {
            console.log(i)
        }
    }
}
printPrimes(97);