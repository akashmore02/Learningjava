//array reduce

let mynumbers = [1,2,3,4,5,6,7,8,9,10]

let myNum = mynumbers.reduce((acc, cur)=>{
    console.log(`The initial value is ${acc} and Current value is ${cur}`);
return acc+cur              
},0)

console.log(myNum);



//using multiple maps and filter
let newnumbers = [1,2,3,4,5,6,7,8,9,10]
let newarr = mynumbers.filter((num)=>num>5).filter((num)=> num>7)
console.log(newarr);
