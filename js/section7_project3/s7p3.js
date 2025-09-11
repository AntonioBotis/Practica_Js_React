'use strict';
let player0=document.querySelector('.player--0');
let player1=document.querySelector('.player--1');
let score0=document.querySelector('#score--0');
let score1=document.querySelector('#score--1');
let current0=document.querySelector('#current--0');
let current1=document.querySelector('#current--1');
let dice=document.querySelector('.dice');
let currentscore=0;
let active_player=0;
let score=[0,0];

score0.textContent=0;
score1.textContent=0;
dice.classList.add('hidden');  

let button_roll=document.querySelector('.btn--roll');
const button_new=document.querySelector('.btn--new');
const button_hold=document.querySelector('.btn--hold');

button_roll.addEventListener('click',function()
{
    const dice_number=Math.trunc(Math.random()*6)+1;
    dice.classList.remove('hidden');  
    dice.src=`poze/dice-${dice_number}.png`;

    if(dice_number!==1)
    {
        currentscore=dice_number+currentscore;
        document.getElementById(`current--${active_player}`).textContent=currentscore;
       
    }
    else{
        document.getElementById(`current--${active_player}`).textContent=0;
        currentscore=0;
        
 
        active_player=active_player===0 ? 1:0;
        player0.classList.toggle('player--active');
        player1.classList.toggle('player--active');
        
    }
});










