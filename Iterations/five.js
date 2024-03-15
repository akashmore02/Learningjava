let mynumbers = [1,2,3,4,5,6,7,8,9,10]
//filter is just like if else which returns the output by a conditional statement
//used only for conditional approach
//it stores the output in an array
//in most cases returns the whole object in case of any conditional statement

//filter helps in filtering out asked data and storing it in array

let MyNum  = mynumbers.filter((num) => num>=5)        //gives implicit return
console.log(MyNum);


//lets make a shopping cart based on selection with the help of filter

let ShopData = [
    {
        BookName: "The Intelligent Investor",
        BookPrice: 399,
        BookReview: 5
    },
    {
        BookName: "The Wolf of Wall Street",
        BookPrice: 299,
        BookReview: 4
    },
    {
        BookName: "Support and Resistance",
        BookPrice: 259,
        BookReview: 5
    },
    {
        BookName: "Supply and Demand",
        BookPrice: 389,
        BookReview: 4
    },
    {
        BookName: "Rich dad, Poor dad",
        BookPrice: 399,
        BookReview: 3
    }
]


//let MyCart  = ShopData.filter((val) => val.BookPrice>=250)        //gives implicit return
//console.log(MyCart);

let MyCart  = ShopData.filter((val) => val.BookPrice>=250 && val.BookReview>4)        //gives implicit return
console.log(MyCart);


let MyBag = ShopData.filter((val)=> {
    if(val.BookPrice>=300)
    {
        return val.BookName
    }
})

console.log(MyBag);