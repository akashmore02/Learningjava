//truthy and falsy values 
//truthy        " ", "0", "false", true, [], {}, function(){}

//falsy 0, -0, false, "", null, undefined, NaN, BigInt 0n

//ex1
name = "0"
if(name)
{
    console.log("Truthy Value");
}

//ex2
val1 = null
if(val1)
{
    console.log("truthy Value");
}
else{
    console.log("Falsy Value");
}

//ex3
val2 = undefined
if(val2)
{
    console.log("truthy Value");
}
else{
    console.log("Falsy Value");
}

//ex4
val3 = ""
if(val3)
{
    console.log("truthy Value");
}
else{
    console.log("Falsy Value");
}

//ex5
val4 = []
if(val4)
{
    console.log("truthy Value");
}
else{
    console.log("Falsy Value");
}

//ex6
val5 = {}
if(val5)
{
    console.log("truthy Value");
}
else{
    console.log("Falsy Value");
}

//ex7
const arr= []
if(arr.length=== 0)
{
console.log("Array is empty")
}

const obj1 = {}
if(Object.keys(obj1).length=== 0)
{
console.log("object is empty")
}

// Nullish Coalescing Operator (??): null undefined
num = 10 ?? 20
//num = null ?? 10
//num = undefined ?? 30
console.log(num);

//ternary operator
//condition? true : false
age  = 21
age >=18? console.log("Adult") : console.log("Minor")