//array
let arr1 = [1, 2, 3, 4, 5]
console.log(arr1)

//array using object
let arr2 = new Array(1, 2, 3, 4, 5)
let sam = arr2.toString()   //converts array to string (1,2,3,4,5)
console.log(sam) 

//console.log(sam.length)    //gives the length of the string. length also includes , sign

//console.log(arr1.push(6))
//console.log(arr1)
//console.log(arr1.pop())   pops the last element of the array and returns it
//console.log(arr1)
//console.log(arr1[2])
//console.log(arr1.indexOf(3))

//console.log(arr1.unshift(0))     adds 0 at the start of the array
//console.log(arr1)                removes the starting element of the array
//console.log(arr1.shift())        removes the starting element of the array
//console.log(arr1)

console.log(arr1)
console.log(arr1.slice(0,2))   //does not manipulate the og array  starts with 0 position ends with 1st position
console.log(arr1)
//console.log(arr1.splice(0,2))  // manipulates the original array    starts with 0 position ends with 1st position
console.log(arr1)


let arr3 = new Array(234, 1, 55, 24, 12)   //sort the arrays in ascending order with the help of first digit or character
console.log(arr3.sort())


let arr4 = new Array("navjot", 1, 55, 24, 12)   //sort the arrays in ascending order with the help of first digit or character
console.log(arr4.sort())


//join  it coverts the array into string by combining them
let arr5 = new Array(1, 3, 4, 5)
console.log(arr5.join())
