//let no = 112.388
//console.log(no)

//another way of initializing no is by using object 
//const no1 = new Number(112)
//console.log(no1);

//some number functions
//console.log((no.toString()).length)    // It converts no to string and then length function is used to find the length of that string
//console.log(no.toPrecision(4))    //used to find the precision of the no. for ex. 123.488 = 123.5


//const no2 = Number(100000000)
//console.log(no2.toLocaleString("en-IN"))   //helps in easy readability of the value. en - IN used for indian standards by dafaults its UK

//console.log(no.toFixed(2));    //returns the output with the count of no( 2 in this case )we want after the decimal point. for Ex for (2) 123.442=123.44  |  (1) 120=120.0


/*Math Functions

console.log(Math.floor(143.66))
console.log(Math.ceil(143.66))
console.log(Math.sqrt(16))
console.log(Math.round(134.555))   //rounds off the no
console.log(Math.random())    //returns random no between 0 and 1
*/

//Logic for random no in dice game

min =1
max =6
const diceno = (Math.floor(Math.random()*10) +1)
console.log(Math.abs(max-diceno))
