const Yr = 2024
//console.log("Happy New"+" year "+ Yr)
//Above method is not a efficient way by using +
//Instead we can use
console.log(`Happy Diwali ${Yr}`);


//another way of declaring a string by using object

const name = new String("EshwarVazirani")
console.log(name[2])
console.log(name.charAt(4))
console.log(name.length)
console.log(name.substring(0,4))
console.log(name.indexOf("V"))
console.log(name.toUpperCase())
console.log(name.toLowerCase())
console.log(name.slice(0,4))

const newName = "    WuShanClan   "
console.log(newName);
console.log(newName.trim())    //removes blank spaces the string. Doesn't remove space in between the words
console.log(newName.trimStart())  //removes blank spaces at the start of the string
console.log(newName.trimEnd())   //removes blank spaces at the end of the string

const url = "www.akash%20more.com"
console.log(url.replace("20", "-"))  //replaces one value in the string with another

console.log(url.includes("akash"))  //returns true if the asked value is included in the string
console.log(url.includes("tukaram"))  //returns false if the asked value is not included in the string

const Splitex = "Happy Diwali Bhava"
const Split1 = Splitex.split(" ")
console.log(Split1)




