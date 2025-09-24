'use strict';

const Person=function(firstName,birthYear)
{
    this.firstName=firstName;
    this.birthYear=birthYear;

}

const tobi=new Person('Tobi',2099);
console.log(tobi)

Person.prototype.calcAge=function()
{
    console.log(2120-this.birthYear);
}
tobi.calcAge();

///////////////////////////////////////
// Coding Challenge #1

/* 
1. Use a constructor function to implement a Car. A car has a make and a speed property. The speed property is the current speed of the car in km/h;
2. Implement an 'accelerate' method that will increase the car's speed by 10, and log the new speed to the console;
3. Implement a 'brake' method that will decrease the car's speed by 5, and log the new speed to the console;
4. Create 2 car objects and experiment with calling 'accelerate' and 'brake' multiple times on each of them.

DATA CAR 1: 'BMW' going at 120 km/h
DATA CAR 2: 'Mercedes' going at 95 km/h

GOOD LUCK 😀
*/

const car=function(brand,speed)
{
    this.brand=brand;
    this.speed=speed;
}

car.prototype.acc=function()
{
    this.speed=this.speed+10;
}

car.prototype.brake=function()
{
    this.speed=this.speed+10;
}
const F04= new car('BMW',150);
const W221= new car('Mercedes',90);
F04.acc();
W221.brake();
console.log(F04.speed);
console.log(W221.speed);