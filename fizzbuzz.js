function fizzBuzz() {
    let fizz =[];
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            fizz.push('FizzBuzz');
        }

        else if (i % 5 === 0) {
            fizz.push('Buzz');
        }

        else if (i % 3 === 0) {
            
            fizz.push('Fizz');
        }

        else {
            fizz.push(i);
        }
        
    }
    return fizz;
}

console.log(fizzBuzz());

