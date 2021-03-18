// 5. Write a program to check whether a number is prime or not. 
// Sample Output:
// Input a number to check prime or not: 13
// The entered number is a prime number.

const number = 13;
let isPrime = true;

if (number === 1 || number === 2) {
    console.log(`The entered number ${number} is not prime number`)
} else {
    for (let i = 2; i < number; i++) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
} 

if (isPrime) {
    console.log(`${number} is a prime number`);
} else {
    console.log(`${number} is a not prime number`);
}