//{} this bracket defines scope
//it is used in function conditional statements and many more
//{} used in object doesnt define scope.

//for example
let username = "Manish"

function UserDetails()
{
    let username = "Akash"
    const roll_no = 45
    //var Class = "B" always avoid using var because it causes scope issues
}

console.log(username)  //here the value of username will be Manish not akash because Username at the start is an global variable
//So anything that is defined within the {} can't be used outside of that scope

/*
//scope in if statement
if(true)      //if true is written then it wil execute the if block anyhow
{    
    const name = "Akash"
if(name ==="Akash")
{
    let sirname = "More"
console.log(name)
}
console.log(sirname)    // sirname wont will execute. It will give error as not defined as the scope of sirname was limited to above {} 
}
*/

//function inside an function
function getno(a, b)
{
function addno ()
{
sum = a + b
console.log( `The sum of a and b is ${sum}`)
}
addno()
}
getno(12,55)

