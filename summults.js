/* This program sums the multiples of 3 and 5 below n. */

function summults(n) {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum += i;
        }
    
    }
    return sum;
}
console.log(summults(100));