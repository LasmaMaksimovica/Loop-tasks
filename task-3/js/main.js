// 3. Write a program to display n terms of natural number and their sum. 
// Sample Output:
// Input a number of terms: 7
// The natural numbers up to 7th terms are:
// 1 2 3 4 5 6 7
// The sum of the natural numbers is: 28

const n = 7;
let sum = 0;
for (let i = 1; i <= n; i++) {
    console.log(i);
    sum += i;
}
console.log(`The sum of the natural numbers is: ${sum}`)