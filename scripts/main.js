'use strict';

const counter = document.querySelector('.counter');
const insert = document.querySelector('.number');
const button = document.querySelector('.btn');
const tip = document.querySelector('.tips');

let clicks = 0;

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

const myRandomNumber = getRandomNumber(100);

console.log(`Mi número aleatorio es ${myRandomNumber}`);

function showNumber() {
    const myNumber = parseInt(insert.value);
    console.log(myNumber);
    const myCounter = counter.innerHTML;

    if (myNumber === myRandomNumber) {
        tip.innerHTML = '¡HAS GANADO, CAMPEONA!';

    } else if (myNumber !== Number) {
        tip.innerHTML = "No has introducido ningún número, por favor, introduce un número del 0 al 100";

    } else if (myNumber > 100 || myNumber < 0) {
        tip.innerHTML = "Por favor, introduce un número del 0 al 100";

    } else if (myNumber < myRandomNumber) {
        tip.innerHTML = "demasiado bajo";
        clicks++;
    } else if (myNumber > myRandomNumber) {
        tip.innerHTML = "demasiado alto";
        clicks++;
    }
    counter.innerHTML = clicks;
}

button.addEventListener('click', showNumber);


function preshEnter(event) {
    if (event.keyCode === 13) {
        showNumber();
    }
}

window.addEventListener('keydown', preshEnter);