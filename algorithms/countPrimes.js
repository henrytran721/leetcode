// Count the number of prime numbers less than a non-negative number, n.

var countPrimes = function(n) {
    if(n === 0 || n === 1) return 0;
    let counter = 0;
    let isPrime;
    for(let i = n - 1; i > 1; i--) {
        isPrime = true;
        for(let j = Math.floor(n / 2); j > 1; j--) {
            if(i % j === 0 && i !== j) {
                isPrime = false;
                break;
            }
        }
        if(isPrime) {
            counter++;
        }
    }
    return counter;
};
