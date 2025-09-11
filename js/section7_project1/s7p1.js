'use strict';
/*console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent='Marian Bonctiu';

document.querySelector('.score').textContent=25;
document.querySelector('.highscore').textContent=1;

document.querySelector('.guess').value=99;*/


const number=Math.trunc(Math.random()*20)+1;
let score=20;
let highscore=0;
let aux=0;

const displayMessage=function (a)
{
 document.querySelector('.message').textContent=a;
}
document.querySelector('.check').addEventListener('click', function() 
{
    const guess= Number(document.querySelector('.guess').value);
  


    if(!guess)
    {
        displayMessage('No input detected');
        

    }
    else if(guess===number)
    {
        displayMessage('Correct number');
        document.querySelector('body').style.backgroundColor='#60b347';
        document.querySelector('.number').style.width='30rem';
        document.querySelector('.number').textContent=number;
        if(aux<score)
        {document.querySelector('.highscore').textContent=score;
        aux=score;}
    
    }
    else if(guess!== number)
    {
        if(score>0)
        {
                displayMessage( guess> number ?
        'Above the number' : 'Too low bruv');
        document.querySelector('.score').textContent=--score;
        }

        else{
        displayMessage('Game over');
         document.querySelector('body').style.backgroundColor='#ff0000ff';
 
            }

    
    }

});

document.querySelector('.again').addEventListener('click',function(){
    const number=Math.trunc(Math.random()*20)+1;

    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.score').textContent=20;
 
    document.querySelector('.number').style.width='15rem';
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value=null;
    displayMessage('Start guessing...');


}
)