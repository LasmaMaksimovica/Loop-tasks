// 7. Write a program to find the factorial of a number. 
// Sample output:
// Input a number to find the factorial: 5
// The factorial of the given number is: 120

const number = 5;
let sum = 1;
for (let i = number; i > 0; i--) {
    sum *= i;

}
console.log(sum)


// OR
// const number = 5;
// let sum = 1;
// for (let i = 1; i <= number; i++) {
//     sum *= i;

// }
// console.log(sum)

