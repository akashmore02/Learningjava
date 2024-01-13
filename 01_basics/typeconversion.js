//conversion of one data type into another data type

let name = "Ramesh"
let a = "1234"
let age = 18  
let number = 1
let loggedininput = true
let state;

let convertedname = Number(name)
let converteda = Number(a)
let convertedage = String(age)
let convertedloggedininput = Number(loggedininput)
let convertednumber = Boolean(number)



console.log(convertedname);   //string to number conversion of any string containing alphabets gives output as NaN (Not a Number)
console.log(converteda);    //string to number conversion of any numerical string gives the same output
console.log(convertedage);   //number to string conversion of any number gives the same output
console.log(convertedloggedininput);   //boolean to number conversion gives 1 for true and 0 for False
console.log(convertednumber);  // number to boolean conversion gives true for 1 and false for 1