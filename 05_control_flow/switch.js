/* Switch Case
executes case block if the case matches
if none of the case matches then a default statement is printed
break statement if used after every block so that the remaining cases wont get checked
*/


month = "June"
//month = "Dec"
switch (month) {
    case "Jan":
        console.log(`The birthday month is ${month}`)
        break;

    case "Feb":
        console.log(`The birthday month is ${month}`)
        break;

    case "Mar":
        console.log(`The birthday month is ${month}`)
        break;

    case "April":
        console.log(`The birthday month is ${month}`)
        break;

    case "May":
        console.log(`The birthday month is ${month}`)
        break;

    case "June":
        console.log(`The birthday month is ${month}`)
        break;
    
    case "July":
        console.log(`The birthday month is ${month}`)
        break;

    default:
        console.log("Bhai tera bday 30 Feb ko aata hai kya")
}