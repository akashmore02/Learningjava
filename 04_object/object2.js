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
        name: "Akash",
        Age: {
            DOB: "10/12/2002"   },
        Wives: [1,4,5,3]    
    }
}

console.log(nest.PersonalDetails.Wives)
console.log(nest.PersonalDetails)

console.log(Object.keys(stud1))     //returns only keys of a object in an array and the datatype of keys is string
console.log(Object.entries(stud1))   //returns each key and value pair of a object in the form of array
console.log(Object.values(stud1))    //returns only values of a object in an array



//Instead of calling "name" key of stud1 as stud1.key we can do
//known as object destructuring
const {Name} = stud1

console.log(Name)


console.log(stud2.hasOwnProperty("Marks"))  //check whether the object has the Marks Key in it or not



//object inside an array
Genders = [
    {
        Count: 2
    },
    {
        First: "Male",
        Second: "Female"
    }
]
console.log(`There are only ${Genders[0].Count} Genders`)
console.log(Genders[1])