'use strict';


/*const greet=function(greeting)
{
    return function(str)
    {
        console.log(`${greeting} ${str}`);
    }
}

const greetHey=greet('Hey');
greetHey('gigel');
greetHey('marinela');*/

//const greet = greeting =>  str => console.log(`${greeting} ${str}`);

//greet('beo')('gigel');

// Coding Challenge #1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀
const poll={
    question: 'what is your fav programming lang',
    options:['0:JS','1:Python','2:Rust','3:C++'],answers : new Array(4).fill(0),
};

const buildPromt=function()
{
    let languageString=poll.question+'\n';
    for (const language of poll.options) {
         languageString=languageString+language+'\n';
    }
    return languageString;
}

const verify=function(input)
{
    
    if( isNaN(input) || (Number(input) >3 || Number(input<0)))
        {
            console.log('Enter Number between 0-3');
            return 0;
            
        }
    else return Number(input);
    console.log(input);
   

}
const displayResults=function(array)
{
for(let i=0;i<=3;i++){
    switch(i)
    {
        case 0:
            console.log(`JS-${array[i]}`);
            break;
        case 1:
            console.log(`Python-${array[i]}`);
            break;
        case 2:
            console.log(`Rust-${array[i]}`);
            break;
        case 3:
            console.log(`C++-${array[i]}`);
            break;     
    }
    }
    console.log('\n');
}
const registerNewAnswer= function()
{   
   
    let userInput=prompt(`${buildPromt()} `);
    
    if(verify(userInput))
    {poll.answers[Number(userInput)]+=1;
    displayResults(poll.answers);}



}

document.querySelector('.poll').addEventListener('click',registerNewAnswer);
*/



// Coding Challenge #2

/* 
This is more of a thinking challenge than a coding challenge 🤓

Take the IIFE below and at the end of the function, attach an event listener that changes the color of the selected h1 element ('header') to blue, each time the BODY element is clicked. Do NOT select the h1 element again!

And now explain to YOURSELF (or someone around you) WHY this worked! Take all the time you need. Think about WHEN exactly the callback function is executed, and what that means for the variables involved in this example.

GOOD LUCK 😀
*/

/*

*/(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';

  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})

