// 6. Write a program to find prime number within a range. 
// Input number for starting range: 1
// Input number for ending range: 100
// The prime numbers between 1 and 100 are:
// 2 3 5 7 11 13 17 19 23 29 31 37 41 43 47 53 59 61 67 71 73 79 83 89 97
// The total number of prime numbers between 1 to 100 is: 25



let numberOfNumbers = 0;
for (let number = 1; number <= 100; number++) {
    let isPrime = true;
    if (number === 1) {
        isPrime = false;

    } else {
        for (let i = 2; i < number; i++) {
            if (number % i === 0) {
                isPrime = false;

                break;

            }
        }
    }

    if (isPrime) {
        console.log(number);
        numberOfNumbers += 1;
    }
}

console.log('The total number of prime numbers from 1-100 is:', numberOfNumbers);