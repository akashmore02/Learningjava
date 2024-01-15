/* data types are categorized into two type:
Primitive  (Call by Value)
Non Primitive  (Call by Reference)

Primitive Datatypes:
Number
Boolean
Null
Undefined
String
Symbol
Bigint


Non Primitive:
Array
Functions
Object
*/

//Symbol Initialization
let id = Symbol('123')   //Value always written in ''
let NewId = Symbol('123')
console.log(id==NewId);  



//array in JS

let festivals = ["Diwali", "Holi", "Ram Navmi"]

//object in JS
let myObj = {
    Day: "Monday",
    date: 12
}

//function in JS

let Bio = function()
{
    console.log("happy");
}


