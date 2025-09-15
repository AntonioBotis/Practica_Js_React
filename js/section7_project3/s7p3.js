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


//subprograme

function switch_data()
{

        

        
      active_player= active_player===0 ? 1:0;
        
        player0.classList.toggle('player--active');
        player1.classList.toggle('player--active');
}


button_roll.addEventListener('click',function()
{
   
    if(score[active_player]>=10)
    {
        console.log('game over');
        dice.classList.add('hidden'); 
    }
    else{
         const dice_number=Math.trunc(Math.random()*6)+1;
    dice.classList.remove('hidden');  
    dice.src=`poze/dice-${dice_number}.png`;
        if(dice_number!==1 )
    {
      
        score[active_player]+=dice_number;
        document.getElementById(`current--${active_player}`).textContent=score[active_player];
        console.log(score[active_player],active_player);
       
    }
    else {
        score[active_player]=0;
         document.getElementById(`current--${active_player}`).textContent=0;
     
        
        switch_data()};
    }
    

    
});

button_hold.addEventListener('click',function(){

    
    
    
    switch_data();
    document.getElementById(`current--${active_player}`).textContent=score[active_player];
    

    

})

button_new.addEventListener('click',function()
{
    score[0]=0;
    score[1]=0;
    dice.classList.add('hidden'); 
    document.getElementById(`current--0`).textContent=0;
     document.getElementById(`current--1`).textContent=0;
     active_player=0;
     player0.classList.add('player--active');
     player1.classList.remove('player--active');
})
/*
1.roll button
-trebuie generat nr random ✅
-afisat dice image de la acel nr random✅
-verificare 1 sau nimic ✅
-daca !== 1 adaugam in vector
-daca ===1 stergem din vector si schimbam side-ul ✅
 */








