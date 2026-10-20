// Task 8: Detect if a Number Is a Palindrome
// set variables for a 3-digit number and check if it reads the same forward and backward.
// Example: Input: 121 -> Output: Palindrome
//          Input: 123 -> Output: Not a Palindrome

let number = 121; // INPUT

// (keep the "// INPUT" comments - the tests use them to try other values)

// write your code below this line

let rev=number%10;
let num1=Math.floor(number/10);;
while(num1>0){
    rev*=10;
    rev+=num1%10;
    num1=Math.floor(num1/10);
}
if(rev==number)
{console.log("Palindrome");
}else{
    console.log("Not a Palindrome");
}