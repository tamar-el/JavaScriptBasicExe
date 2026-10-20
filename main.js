// Task 7: Print a Number Pyramid (Static Depth 5)
// Print the following shape using loops only:
// 1
// 22
// 333
// 4444
// 55555


// write your code below this line
let tmp='';
for (let i = 1; i <=5; i++) {
   for (let j = 0; j < i; j++) {
        tmp+=i;
   }   
    console.log(tmp); 
    tmp='';
}