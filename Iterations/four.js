//for in
const friends =["Eshwar", "Aditya","Raj"]
for (const name in friends) {
   console.log(friends[name])
}

const enemies = {
    Name: "Rishabh",
    Age: 22
}
for (const data in enemies) {
console.log(enemies[data])
}



//for each very imp 

arr1 = [{
    name: "Akash",
    Age: 21
    },
    {
    name: "Eshwar",
    Age: 22
    },
    {
    name: "Tarun",
    Age: 28
    }]

    arr1.forEach((index) => {
        console.log(index.name)
        console.log(index.Age)
    });