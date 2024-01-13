//conversion of one data type into another data type

bname = ""
let name = "Ramesh"
let a = "1234"
let age = 18  
let number = 1
let loggedininput = true
let state;
let value = null

let convertedname = Number(name)
let converteda = Number(a)
let convertedage = String(age)
let convertedloggedininput = Number(loggedininput)
let convertednumber = Boolean(number)
let convertedstate = String(state)
let convertedstates = Boolean(state)
let convertedvalue = Number(value)
let convertbname = Boolean(bname)


console.log(convertedname);   //string to number conversion of any string containing alphabets gives output as NaN (Not a Number)
console.log(converteda);    //string to number conversion of any numerical string gives the same output
console.log(convertedage);   //number to string conversion of any number gives the same output
console.log(convertedloggedininput);   //boolean to number conversion gives 1 for true and 0 for False
console.log(convertednumber);  // number to boolean conversion gives true for 1 and false for 1
console.log(convertedstate); // undefined to string conversion gives sundefined as output (in case of undefined to number it gives NaN)
console.log(convertedstates);   // undefined to boolean gives false as output
console.log(convertedvalue);  // null to number conversion gives 0 as output
console.log(convertbname);  //coversion of empty string to boolean gives false

console.log(bname)  //output of blanl string "" gives false