
const accountId = 1234    //once a variable is declared constant then the value stays constant throughout the code. Can't be changed later.
let accountType = "Savings"  //Preferable while writing code. The value of  the variable can change.
var accountholder = "Akash"   //Not preferrable because it has scope issues
accountstate = "Mumbai"

console.log(accountstate)
console.table([ accountId, accountType, accountholder])   //here in table only the string values are printed with '
