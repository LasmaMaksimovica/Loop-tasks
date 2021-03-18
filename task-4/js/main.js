// 4. Write a program to find the perfect numbers between 1 and 500. 
// The perfect numbers between 1 to 500 are:
// 6
// 28
// 496

const max = 500;
let sum;
for (let number = 1; number <= max; number++) {
    sum = 0;

    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            sum += i;
        }
    }

    if (sum === number && sum !== 1) {
        console.log(sum, 'is a perfect number');

    }
}