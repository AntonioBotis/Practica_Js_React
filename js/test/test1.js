'use strict';

/*alert("Hello World");
let aux=true;
console.log(aux);
console.log(typeof aux);
*/



/*const an=2024;
const viitor= an + 8;
const trecut= an-7;
console.log(an, viitor, trecut);
let x=5;
x*=22;
console.log(x); 

console.log(x>an);

//challenge1
const mass_mark=78;
const height_mark=1.69;
const mass_john=92;
const height_john=1.95;

const bmi_mark=mass_mark/(height_mark**2);
const bmi_john=mass_john/(height_john**2);

const mark_higher_bmi=bmi_mark>bmi_john;
console.log(bmi_mark, bmi_john, mark_higher_bmi);

//test2
const mass_mark=95;
const height_mark=1.88;
const mass_john=85;
const height_john=1.76;

const bmi_mark=mass_mark/(height_mark**2);
const bmi_john=mass_john/(height_john**2);

const mark_higher_bmi=bmi_mark>bmi_john;
console.log(bmi_mark, bmi_john, mark_higher_bmi);

console.log('marian \n\
    gigi becali' );

console.log(`marian
smekeru`);

//chalenge2
 const mass_mark=95;
const height_mark=1.88;
const mass_john=85;
const height_john=1.76;

const bmi_mark=mass_mark/(height_mark**2);
const bmi_john=mass_john/(height_john**2);

const mark_higher_bmi=bmi_mark>bmi_john;
console.log(bmi_mark, bmi_john, mark_higher_bmi);

if(mark_higher_bmi)
    console.log(`Mark has a higher BMI ${bmi_mark} than John ${bmi_john}`);
else
    console.log(`John has a higher BMI ${bmi_john} than Mark ${bmi_mark}`);

//challenge3
const dolphins=(96+108+89)/3;
const koalas=(88+91+110)/3;

if(dolphins>koalas){
    console.log(`Delfini smekeri`);
}
else if(dolphins<koalas){
    console.log(`Koala smekeri`);
}
else{
    console.log(`Delfini si Koala sunt egali`);
}


//challenge4
const bill=300;
const tip= bill>=50 && bill<=300 ? bill*0.15 : bill*0.2;
console.log(`${tip}`);

//challenge1 section3 test1
const average=(a,b,c)=>(a+b+c)/3;
const scor_delfini=average(44,23,71);
const scor_koala=average(65,54,49);
console.log(scor_delfini, scor_koala);
function castigator(a,b)
{
    if(a>=2*b)
        console.log(`Delfinii castiga (${a} vs ${b})`);
    else
        console.log(`Koala castiga (${b} vs ${a})`);
}
console.log(castigator(scor_delfini, scor_koala));

const average=(a,b,c)=>(a+b+c)/3;
const scor_delfini=average(85,54,41);
const scor_koala=average(23,34,27);
console.log(scor_delfini, scor_koala);
function castigator(a,b)
{
    if(a>=2*b)
        console.log(`Delfinii castiga (${a} vs ${b})`);
    else
        console.log(`Koala castiga (${b} vs ${a})`);
}
console.log(castigator(scor_delfini, scor_koala));


//challenge2 section3
function calc_tip(a)
{
   return  a >=50 && a <=300 ? a*0.15 : a*0.2; 
}

const bills=[125,555,44];
const tips=[];
for(let i=0;i<bills.length; i++)
{
   tips.push(calc_tip(bills[i]));
}
const total=[];
for(let i=0;i<bills.length; i++)
{
   total.push(bills[i]+tips[i]);
}

for(let i=0;i<total.length; i++)
{
    console.log(`Total: ${total[i]}  = tip: ${tips[i]} + bills: ${bills[i]}`);
}
    

//challenge3 section3


const mario={
    name:"Mario Smekeru",
    mass: 150 ,
    height: 1.4,
    bmi:function()
    {
    return this.mass/(this.height**2);

    }
    
}

const gigel={
    name:"gigel patrone",
    mass: 190 ,
    height: 2.4,
    bmi:function()
    {
    return this.mass/(this.height**2);
    
    }
    
}
console.log(mario.bmi(), gigel.bmi());

mario.bmi() > gigel.bmi() ? console.log(`${mario.name} has a higher BMI ${mario.bmi()} than ${gigel.name} ${gigel.bmi()}`) : console.log(`${gigel.name} has a higher BMI ${gigel.bmi()} than ${mario.name} ${mario.bmi()}`);

*/
//challenge4 section3

const bills=[22,295,176,440,37,105,10,1100,86,52];

const tips=[];
const totals=[];

for(let i=0;i<bills.length;i++)
    tips.push(bills[i]>=50 && bills[i]<=300 ? bills[i]*0.15 : bills[i]*0.2);
for(let i=0;i<bills.length;i++)
    totals.push(bills[i]+tips[i]);

const average=function(a){
    let sum=0;
    for(let i=0;i<a.length;i++)
        sum+=a[i];
    return sum/a.length;
}

console.log(average(totals));





















































































