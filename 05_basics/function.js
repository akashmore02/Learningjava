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
