const happy = "5"        //comparison operator converts any number which is a string into a number by default
if(happy == 5)     
{
console.log("done")
}

//Strict Eqaulity Operator
const name1 = "Akash"
if(name1 === 5)     //returns false if the datatypes differ
{
console.log("done")
}


score = 78
if(score>90)
{
    console.log("Score is higher than 90");
}
else{
    console.log("Score is lower than 90");
}


//&& Operator all the conditions should be true written with && to enter the execution block
//|| Operator if any of the condition is true then the execution block gets executed


if(score>50 && score<100)
{
    console.log(`The score is ${score}`)
}
else
{
    console.log("Please score enough marks")
}