const container = document.getElementById("container");
const factorButton = document.getElementById('factor');

function factor(num) {
    let factors = [];

    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            factors.push(i);
        }
    }

    // Join the factors array into a string with commas
    let factorsString = factors.join(', ');

    // Append the factorsString followed by a <br> tag to the existing content of the container
    container.innerHTML += factorsString + '<br>';
}

factorButton.addEventListener('click', () => {
    let numToFactor = prompt('give a number to factor');
    let number = parseInt(numToFactor);

    factor(number);
});