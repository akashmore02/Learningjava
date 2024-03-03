//IIFE (Immediately Invoked Function Expression)
//it is used to invoke a function immediately after defining
//it is useful when the function does not have any name

(function (){                                   //without function name
console.log("Happy Diwali")
})();      //it is important to add semicolon if we are writing another iife function after it


(function happy(){                            //with function name
    console.log("Happy Holi")
    })();


//iife Arrow Function
((name) => {
    console.log(`Apun ka naam hai ${name}`)         //without function name
})("Babban Batli")




