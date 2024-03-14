//forof

const heros = ["Hanuman", "Jaamwan", "Shriram"]

for (const name of heros) {
    console.log(`The mighty superheros are ${name}`);
}

const hero = "mydad"

for (const name of hero) {
    console.log(`My superhero is ${name}`);
}


const map = new Map();
map.set("Name", "Akash")        //the datatype of key can be anything in
map.set("RollNo", 24)

console.log(map);  //print map


for (const [key, value] of map) {   //gives the values of key and value
    console.log(key, value);
}

/*  javascript objects does not iterate
    let studdetail = {
    stdname: "Akash",
    stdid: 126,
    stdage: 18
}

for (const [key, value] of studdetail) {
    console.log("The student details are")
    console.log(key, value)
}
