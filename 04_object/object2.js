const stud1 = {
    Name: "Akash",
    Age: 20
}

const stud2 = {
    Sub: "Maths",
    Marks: 20
}
//to combine 2 objects using spread 
const stud3 = {...stud1, ...stud2}
console.log(stud3)

//to combine two objects using object.assign
//here the key value pair of stud2 gets assigned to stud1 so the orginal object stud1 gets manipulated
//const stud4 = Object.assign(stud1, stud2)    //first is the target (stud1) which stores the key value pairs of the remaining source
//console.log(stud1)

//to avoid manipulation of og array we can use {}
const stud4 = Object.assign({}, stud1, stud2)  //here the values of stud1 and stud2 will be stored in {} and will get printed
console.log(stud4) 


//object nesting
const nest = {
    PersonalDetails: {
        name: "Akash"
        Age: {
            DOB: "10/12/2002"       }
    }
}

