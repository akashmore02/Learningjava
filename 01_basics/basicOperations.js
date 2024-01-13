let value = 3
let negValue = -value
console.log(negValue);

//arithmatic operations
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
//console.log(4**4); provides power. for ex 2**3 indicates 2^3=8 |  4**4=256
//console.log(2/3); 
// console.log(2%3); provides remainder

let str1 = "hello"
let str2 = " hitesh"
let str3 = str1 + str2
console.log(str3);

//in case of only numbers like 1+3 or 34+23 + operator does addtion operation
//but in case there is a string in the operation like "2" + 1 it does concatenation like 21
// console.log("1" + 2); //here it concatenates 1 and 2 as 12
// console.log(1 + "2");  //here also it concatenates 1 and 2 as 12
// console.log("1" + 2 + 2); //here if there is a string at the start then the output becomes 122
// console.log(1 + 2 + "2"); //here first addition of numbers 1 and 2 is done then it is concatenated with 2 so output becomes 32

let num5 = "1" + 2
console.log(typeof num5) 

// console.log( (3 + 4) * 5 % 3); always use parenthesis to define flow of operation
// console.log(+true); //if there is +true then the output is 1
// console.log(+"");  //if there is +"" then output is 0

let num1, num2, num3
num1 = num2 = num3 = 2 + 2   //it works but not a professional practice


let gameCounter = 100
++gameCounter;   //prefix
console.log(gameCounter);
