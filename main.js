// Task 1: Sum All Digits of a 5-Digit Number
// save a 5 digit number in a variable. Calculate and print the sum of its digits.
// Example: Input: 58423 -> Output: Sum is 22


// (keep the "// INPUT" comments - the tests use them to try other values)

// write your code below this line
let number= 58423; // INPUT
let num1= number;
let sum = 0;

for (let index = 0; index <5; index++) {
    sum+=(num1%10);
    num1 = Math.floor(num1 / 10);
}
console.log("Sum is "+ sum);
