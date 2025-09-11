'use strict';

const modal=document.querySelector('.modal');
const overlay= document.querySelector('.overlay');
const btnCloseModal=document.querySelector('.close-modal');
const btnOpenModal=document.querySelectorAll('.show-modal');

console.log(btnOpenModal);
const open_modal=function(){
    modal.classList.remove('hidden');
        overlay.classList.remove('hidden');
}
for(let i =0;i<btnOpenModal.length;i++)
    btnOpenModal[i].addEventListener('click',open_modal);


const close_modal=function(){
    modal.classList.add('hidden');
        overlay.classList.add('hidden');
}
btnCloseModal.addEventListener('click',close_modal);

overlay.addEventListener('click',close_modal);

document.addEventListener('keydown',function(e)
{
if(e.key==='Escape' && !modal.classList.contains('hidden'))
    close_modal();

});