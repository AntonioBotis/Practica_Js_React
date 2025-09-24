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
console.log(W221.speed);class CarClass{
    constructor(brand,model,price)
    {
        this.brand=brand;
        this.model=model;
        this.price=price;
    }
    year5depreciation()
    {
        console.log(this.price/2);
    }

    static depreciation()
    {console.log(this.price/2);
        
    }
}

const bmveu=new CarClass('BMW','G12',120000);
bmveu.year5depreciation();
*/


/* 
1. Re-create challenge 1, but this time using an ES6 class;
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide by 1.6);
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but converts it to km/h before storing the value, by multiplying the input by 1.6);
4. Create a new car and experiment with the accelerate and brake methods, and with the getter and setter.

DATA CAR 1: 'Ford' going at 120 km/h

GOOD LUCK 😀
*/

class Car{
    constructor (model,speed)
    {
        this.model=model;
        this.speed=speed;
    }

    get speedUS(){
        console.log(this.speed/1.6);
    }
    set peedUS(speed)
    {
        this.speed=this.speed/1.6;
    }

   acc=function()
{
    this.speed=this.speed+10;
}

    brake=function()
{
    this.speed=this.speed+10;
}
}

const bmveu=new Car('G80',340);
bmveu.speedUS;
bmveu.peedUS;
console.log(bmveu.speed);
bmveu.acc();
console.log(bmveu.speed);