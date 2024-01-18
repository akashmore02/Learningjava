//date

const date = new Date()
console.log(date.toString())
console.log(date.toLocaleString())
console.log(date.toDateString())
console.log(date.toTimeString())
console.log(date.toJSON())
console.log(date.toISOString())


//const newdate = new Date(2023, 1, 22)    Year, Month, Day   (Month starts with 0)
//console.log(newdate.toDateString())

//const newdate = new Date(2023, 1, 22, 5, 3)   Year, Month, Day, Hr, Minute    (Month starts with 0)
//console.log(newdate.toString())


const newdate = new Date("2023-01-20")   //yyyy-mm-dd   (Month starts with 1)
//console.log(newdate.toDateString())
//console.log(newdate.getTime())
//console.log(newdate.getDate())

//string integration
console.log(`the date is ${newdate.getDate()}`)


const timestamp = Date.now()  //by default current date
console.log(timestamp)  //time in milisecond from 1970 till now
console.log(Math.floor(timestamp/1000))   //time in seconds






