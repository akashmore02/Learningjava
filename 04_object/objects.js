//Singleton objects

let ob1= new Object()
ob1.name = "Ramesh"
console.log(ob1.name)
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

//Object.freeze(happy)        freezes the object so that no existing data can be altered or no new data can be added in the object
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

happy.greetingstwo = function() {
    console.log(`Welcome to ${this.name}'s world`)     //this is used to refer to the object from which the key value pair is derived in this function
}
console.log(happy.greetingstwo())


