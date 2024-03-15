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
//to extract data from a array containing objects (Industry Based)
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

   //way1     preferred
    arr1.forEach((index) => {
    console.log(index.name)
    console.log(index.Age)
    });

    //way2
    function stddata(value){
        console.log(value.name)
        console.log(value.Age)

    }
    arr1.forEach((stddata))



    //way3 not preferred
    for (const key in arr1) {
      console.log(arr1[key].name)
    }

