'use strict';
/*console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent='Marian Bonctiu';

document.querySelector('.score').textContent=25;
document.querySelector('.highscore').textContent=1;

document.querySelector('.guess').value=99;*/


const number=Math.trunc(Math.random()*20)+5;
let score=20;
let highscore=0;


document.querySelector('.check').addEventListener('click', function() 
{
    const guess= Number(document.querySelector('.guess').value);
  


    if(!guess)
    {
        document.querySelector('.message').textContent='No input detected';
        

    }
    else if(guess===number & score>0)
    {
        document.querySelector('.message').textContent='Correct number';
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width='30rem';
        document.querySelector('.number').textContent=number;
        document.querySelector('.highscore').textContent=++highscore;
    
    }
    else if(guess>number & score>0)
    {
        document.querySelector('.message').textContent='Above the number';
        document.querySelector('.score').textContent=--score;
    }
    else if( guess<number & score>0)   
    {
        document.querySelector('.message').textContent='Too low bruv';
        document.querySelector('.score').textContent=--score;
    }
    else if(score==0){
        document.querySelector('.message').textContent='Game over';
         document.querySelector('body').style.backgroundColor='#ff0000ff';
        stop;
    }

});

document.querySelector('.again').addEventListener('click',function(){

    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.score').textContent=20;
 
    document.querySelector('.number').style.width='15rem';
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value=null;
    document.querySelector('.message').textContent='Start guessing...';


}
)