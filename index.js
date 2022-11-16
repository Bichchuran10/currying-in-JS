//currying in JS

//using bind method

let multiply=function(x,y)
{
    console.log(x*y)
}

let multiplyByTwo= multiply.bind(this,2) //2 as x
multiplyByTwo(4) //4 as y


//using closures

let add=function(a)
{
    return function(b){
        console.log(a+b)
    }
}

let addTwoNumbers=add(2) //a as 2
addTwoNumbers(3) //b as 3