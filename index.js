//1

const obj1={ 

    num:4

}



let sum1=function(a,b)

{

    return this.num + a + b

}



console.log(sum1.call(obj1,5,10))



//2

const obj2={ 

    num:4

}



let sum2=function(a,b)

{

    return this.num + a + b

}



let arr=[5,10]

//using apply we can pass an array as argument

console.log(sum2.apply(obj2,arr))



//3

const obj3={ 

    num:4

}



let sum3=function(a,b)

{

    return this.num + a + b

}





//using bind returns a function which bounds the method with the object

let bound=sum3.bind(obj3)



console.log(bound) //returns a function bound



console.log(bound(5,10)) //executes the function .we don't have to pass the obj as argument



//4

const student={

    age:20

}



let printAge=function()

{

    return this.age

}



let bound2= printAge.bind(student)



console.log(bound2())


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