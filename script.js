let numToFactor = prompt('give a number to factor')
let number = parseFloat(numToFactor);
const container = document.getElementById("container");

function factor(num) {
    let factors = [];

    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            factors.push(i);
        }
    }

    container.innerText = factors; // this is my project specific
}

factor(number);