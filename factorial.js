// Write a program that prompts for an intenger number n. Where  1 <= n. Solve this using recursion.
let intenger=parseInt(prompt("Enter an intenger number"));

function factorial (n) {
    return n > 1 ? n * factorial(n - 1) : 1;
    }


console.log(factorial(intenger));