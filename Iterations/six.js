//map is used to perform all types of operations
let mynumbers = [1,2,3,4,5,6,7,8,9,10]

let MyNums = mynumbers.map((num)=> num*10)
console.log(MyNums)


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

//let MyCart = ShopData.map((val)=> val.BookPrice)
//console.log(MyCart)
arr1 =[]
MyCart = ShopData.map((val)=> {
    if(val.BookPrice>300 && val.BookReview>4)
    {
        arr1.push(val.BookName)
    }
})
console.log(arr1)

