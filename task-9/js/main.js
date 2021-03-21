// 9. Write a program to find the Greatest Common Divisor (GCD) of two numbers.
// Sample Output:
// Input the first number: 25
// Input the second number: 15
// The Greatest Common Divisor is: 5

const number1 = 25;
const number2 = 15;

for (let i = number1; i > 0; i--)
    if (number1 % i === 0 && number2 % i === 0) {
        console.log(i)
        break
    }
