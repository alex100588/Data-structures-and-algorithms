
// Find factorial iterative
function findFactorialIterative(number){
    let total = 1
    if(number === 2){
        return number
    }
    for(let i = number; i > 0; i--){
        // console.log(i);
        total *= i
    }
    return total
}

console.log('Iterative result');
console.log(findFactorialIterative(5));
console.log(findFactorialIterative(4));
console.log(findFactorialIterative(3));
console.log(findFactorialIterative(2));
console.log(findFactorialIterative(1));

// Find factorial recursive
function findFactorialRecursive(number){
    if(number === 2 || number === 1) return number
    return number * findFactorialRecursive(number-1)
}

console.log('Factorial result');
console.log(findFactorialIterative(5));
console.log(findFactorialIterative(4));
console.log(findFactorialIterative(3));
console.log(findFactorialIterative(2));
console.log(findFactorialIterative(1));