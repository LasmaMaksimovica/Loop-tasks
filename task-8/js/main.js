// 8. Write a program to find the last prime number occur before the entered number.
// Sample Output:
// Input a number to find the last prime number occurs before the number: 50
// 47 is the last prime number before 50


const maxNumber = 50;
for (let number = maxNumber; number >= 1; number--) {
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
        break;
    }
}