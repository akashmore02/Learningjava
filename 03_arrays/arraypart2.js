//array push in js

let arr1 = new Array("Jai", "Shree", "Ram")
let arr2 = new Array("Jai", "Hanuman")
arr1.push(arr2)
console.log(arr1)

//concatenate in Array
let catarr = arr1.concat(arr2)    //does not manipulate og array
console.log(catarr)

//comibing array using spread
let catarr1 = [...arr1, ...arr2]    
console.log(catarr1);


//complex array to simple array
let complexarr = [[1, 4], ["happy", "Birthday"], ["Yogini", 2025]]
let newcomplexarr = complexarr.flat()
console.log(complexarr)
console.log(newcomplexarr)



//check whether given data is array or not   here Array properties are used

let happy = ("happy")
console.log(Array.isArray(happy))

//coverting the upper data to array
let newarr = Array.from(happy)
console.log(newarr)
let newarr1 = {name: happy}   
console.log(Array.from(newarr1))  //returns blank square spaces


//making array from given data
let data1 = 11
let data2 = "happy"
let data3 = true

let newarrfromdata = Array.of(data1, data2, data3)
console.log(newarrfromdata)

