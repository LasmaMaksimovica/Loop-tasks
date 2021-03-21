// 10. Write a program to find the sum of digits of a given number.
// Sample Output:
// Input a number: 1234
// The sum of digits of 1234 is: 10

let digits = '1234';
sum = 0;
for (let char of digits) {
    sum += +char;
    // OR sum += parseInt(char);
}
console.log(`The sum of digits ${digits} is ${sum}`)


