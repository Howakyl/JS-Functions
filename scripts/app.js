// VERBAL QUESTIONS 

//1 Parameters are named variables put in a function to be used later. Arguments are parameters with actual values, used when the function is called.

//2 Return allows you to "return" a value from a function, allowing the value to be used. Console.log only writes the values in text; it doesn't define anything.

//3 Functions being able to return values gives us the ability to re-use functions to call them later in loops, functions, etc. Thus allowing us to have to write much short code, and not having to repeat ourselves.

//////////////////////////////////////////////////////////

//PALINDROME AGAIN

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

//////////////////////////////////////////////////////////
