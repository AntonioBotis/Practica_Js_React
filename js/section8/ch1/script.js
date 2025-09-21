'use strict';
/*1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. Write a function ('printGoals') that receives an arbitrary number of player names (NOT an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, WITHOUT using an if/else statement or the ternary operator.
TEST DATA FOR 6: Use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};



/*const [players1,players2]=game.players;

const [gk,...fieldPlayers]=players1;

const allPlayers=[...players1,...players2];

const players1Final=[...players1,'Thiago','Couthino','Perisic'];
console.log(players1Final);

const {
  odds:{team1,x:draw,team2},

}=game;

const printGoals=function(...players){
  console.log(players);
  console.log(`${players.length} goals `);


}

printGoals('Davies', 'Muller', 'Lewandowski' ,'Kimmich');
printGoals( 'Lewandowski' ,'Kimmich');
printGoals(...game.scored);


team1<team2 && console.log('Team 1');
team1>team2 && console.log('team2');
let i=0;
for (const goal_name of game.scored) {
  i++;
  console.log(`${goal_name}:${i}`);
  
}

const oddds=Object.values(game.odds);
let average=0;
for(const odd of oddds)

  average+=odd;

average/=oddds.length;
console.log(average);


  console.log(`Odd of victory ${game.odds.team1} for ${game.team1}\nOdd of draw: ${game.odds.x}\nOdd of Vicotry ${game.odds.team2} for ${game.team2}` ) ;

i=0;
let arr;
for(const goal_name of game.scored)
{
  for (const name of game.scored) {
    if(name===goal_name)
      {i++;
        arr[goal_name]++;
      }

  }
}

console.log(arr);


const order=new Set(['a','b','b','a']);
console.log(order);
console.log(new Set('marian'));
console.log(order.size);



  
  const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};
const common=italianFoods.intersection(mexicanFoods);
console.log(...common);

const all=italianFoods.union(mexicanFoods);
console.log(...all);
*/
// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

const arr=[];
let nrEvents=0;
const events2=[...new Set(gameEvents.values())];
console.log(...events2);

for (const element of gameEvents) {
  nrEvents+=1;
  arr.push(element[1]);
  element[0]<=45 ? console.log(`[First Half] ${element[0]} : ${element[1]}`):console.log(`[Second Half] ${element[0]} : ${element[1]}`);
}
const events=new Set(arr);
console.log(...events);

gameEvents.delete(64);

console.log(gameEvents);

console.log(Math.ceil(90/nrEvents));*/

// Coding Challenge #4


/*Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));



document.querySelector('button').addEventListener('click',function()
{let text= document.querySelector('textarea').value;
  text=text.toLowerCase();
 
  const underIndex=text.indexOf('_');
  text=text.slice(0,underIndex)+text[underIndex+1].toUpperCase()+text.slice(underIndex+2,text.length);
  console.log(text);
});
*/

/*
///////////////////////////////////////
// String Methods Practice



// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)
*/



const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

let organized=flights.trim().split('+');
console.log(organized);

const cut= function(flight){

flight=flight.trim().split(';');
flight[0]=flight[0].slice(1,flight[0].length);
flight[0]=flight[0].replace('_',' ');

flight[1]=flight[1].slice(0,3).toUpperCase();
flight[2]=flight[2].slice(0,3).toUpperCase();
flight[3]=flight[3].replace(':','h');


console.log(`${flight[0]} from ${flight[1]} to ${flight[2]} (${flight[3]})`);

}

for (const element of organized) {
  cut(element);
}
