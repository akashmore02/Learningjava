//Singleton objects
//non singleton objects


//object literals below

let PetName = Symbol("Khandya")
let happy = {
    name: "Akash",
    Roll_No: 26,
    [PetName]: "Khandya",
    WorkingDays: ["Mon", "Tue", "Wed"]
}
console.log(happy)


happy.Roll_No = 20    //change key value pair data in the object
console.log(happy)
console.log(happy["name"])
console.log(happy["WorkingDays"])
console.log(happy["PetName"])


happy.greetings = function() {
    console.log("Welcome to My World");
}
//creating a method
console.log(happy.greetings())

