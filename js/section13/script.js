'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn=>btn.addEventListener('click',openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

console.log(document.documentElement);
console.log(document.documentElement);  

const btnScrollTo=document.querySelector('.btn--scroll-to');
const section1=document.querySelector('#section--1');


section1.scrollIntoView({behavior:'smooth',});

document.











/*
btnScrollTo.addEventListener('click',function(e)
{
const s1coords=section1.getBoundingClientRect();

console.log(e.target.getBoundingClientRect());
window.scrollTo({
  left: s1coords.left+window.pageXOffset,
  top: s1coords.top+window.pageYOffset,
  behavior:'smooth',
});
});const message=document.createElement('div');
message.classList.add('cookie-message');
message.textContent='cookies brotha';
message.innerHTML='yoyoyoy <button class="btn btn--close-cookue">got it </button>';
header.append(message);const h1=document.querySelector('h1');
h1.onmouseenter=function(e)
{
  alert('gg wp');
}

const randomInt=(min,max)=>Math.floor(Math.random()*(min-max+1)+min);
const randomColor=()=> `rgb(${randomInt(0,255),randomInt(0,255),randomInt(0,255)})`;

document.querySelector('.nav__link').addEventListener('click',function(e){
  this.style.backroundColor=randomColor();
});
document.querySelector('.nav__links').addEventListener('click',function(e){
  this.style.backroundColor=randomColor();
});
document.querySelector('.nav').addEventListener('click',function(e){
  this.style.backroundColor=randomColor();
});*/


