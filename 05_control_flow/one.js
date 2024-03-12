//comparison operator
const happy = "5"        //converts any number which is a string into a number by default
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


//if else if operator

const grade = "B"
if(grade == "A")
{
    console.log("Grade is A")
}
else if (grade == "B"){
    console.log("Grade is B")
}
else if (grade == "C")
{
    console.log("Grade is C")
}
else{
    console.log("Not a valid grade")
}


//&& Operator all the conditions should be true to enter the execution block
//|| Operator if any of the condition is true then the execution block gets executed

//score value is 78 as defined above
const age = 12
//const age = 10      if tried with age as 12 it wont will execute as it does not fulfil the age condition
const gender = "Male"

if(age>=12 && gender=="Male")
{
    console.log("Candidate fulfils the requirement")
}
else
{
    console.log("Abort")
}

//||
if(age>=12 || gender=="Female")
{
    console.log("Candidate fulfils the requirement")
}
else
{
    console.log("Abort")
}


/*break in loops
break keyword breaks all the loops*/

const name = "Mukesh"
const marks = 7
for (i=0; i<=7; i++ )
{
    if(name == "Mukesh" && i == marks)
    {
        console.log(`The marks scored by ${name} are ${marks}`)
        break;
    }
    console.log(`the marks are ${i}`)
}

//continue in js
const myname = "Rakesh"
const marks1 = 6
for (i=0; i<=7; i++ )
{
    if(myname == "Rakesh" && i == marks1)
    {
        console.log(`The marks scored by ${myname} are ${marks1}`)
        continue;
    }
    console.log(`the marks are ${i}`)
}


