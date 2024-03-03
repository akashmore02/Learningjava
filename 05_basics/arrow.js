//function in JS

const stud1 = function(name1) {
    return name1
}

console.log(stud1("Akash"))


//arrow function in JS

const stud2 = (name2) =>{           //function keyword is removed and added arrow after it
    return name2
}

console.log(stud1("Raj"))


//implicit return in java

const stud3 = (name3) => name3                     //implicit return means you have to execute and return only a single line of code. It returns whatever that is written
/* const stud3 = (name3) => (name3)   also can be written like this*/
console.log(stud1("Eshwar"))


//use of this to access the key value pairs within the object itself. Works only when used within object 

const studentdetails = {
    name: "Akash",
    Std: 12,
    birth: function(DOB){
        console.log(`The Date of Birth of ${this.name} is ${DOB}`)
    }
}

studentdetails.birth("10-12-2002")



const addTwo = () => ({username: "hitesh"})     //returns object inside the function


//this will be discussed later
// const myArray = [2, 5, 3, 7, 8]
// myArray.forEach()