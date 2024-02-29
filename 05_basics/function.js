//function in js

//1st way
happy = function()
{
    console.log("Happy Diwali")
}

//happy()   //to call the function


//2nd way mostly used
//function Logindetails(username = "Akash")  used to provide default arguments. It takes default value in case the user doesn't provide the argument
function Logindetails(username){
if(username === undefined){
    console.log("Please enter the username")
   return    //in a function after writing return keyword no further code in that function gets executed so it helps us in stopping the flow
}
console.log("Login Sucessful")
}

Logindetails("Akash")


//note: return just returns value, does not print it. we need to use console log to print it


//how to take multiple values in an function
//using ... rest operator

function Marks (...marks){
    return marks     //stores the values as array in mark
}

console.log(Marks(50, 43, 66, 87, 98))


//how to take values inside of an object in function

const Score = {
    Maths:  98,
    Science: 86,
    Marathi: 82
}

function stud_details(anyobject){
return `The marks scored by the student in Maths, Science and Marathi are ${anyobject.Maths}, ${anyobject.Science}, ${anyobject.Marathi} respectively`
}

console.log(stud_details(Score))

//how to take values inside of an array in function

const funded_acc = [2000, 4556, "2 Lakhs", "Not Eligible"]

function fundedaccount(Anyarray)
{
    console.log("The funded account is worth")
    return Anyarray[1]
}

console.log(fundedaccount(funded_acc))



console.log(happy)