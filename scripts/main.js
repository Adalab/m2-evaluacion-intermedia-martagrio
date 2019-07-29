'use strict';

const counter = document.querySelector('.counter');
const insert = document.querySelector('.number');
const button = document.querySelector('.btn');
const tip = document.querySelector('.tips');

console.log(tip.innerHTML);

// Función que genera un número aleatorio hasta un máximo dado
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

const myRandomNumber = getRandomNumber(100);

console.log(`Mi número aleatorio es ${myRandomNumber}`);

function showNumber() {
    const myNumber = parseInt(insert.value);
    const myCounter = counter.innerHTML;
    counter.innerHTML = parseInt(myCounter) + 1;

    if (myNumber === myRandomNumber) {
        tip.innerHTML = '¡HAS GANADO, CAMPEONA!';
    } else if (myNumber < myRandomNumber) {
        tip.innerHTML = "demasiado bajo";
    } else {
        tip.innerHTML = "demasiado alto";
    }
}

button.addEventListener('click', showNumber);