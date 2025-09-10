'use strict';

console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent='Marian Bonctiu';

document.querySelector('.score').textContent=25;
document.querySelector('.highscore').textContent=15;

document.querySelector('.guess').value=99;
console.log(document.querySelector('.guess').value);

document.querySelector('.check').addEventListener('click', function() {
    console.log(document.querySelector('.guess').value)});