//Question 1
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

const myValues = Object.values(person3)
console.log(myValues);



//Question 2
//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

        //Part 1

function Person(name, age) {
    this.name = name
    this.age = age

        //Part 2

    this.printInfo = () => {
        console.log("My name is" + " " + this.name +" " + "and i am "+ this.age)

    }
}

const c1 = new Person('Tommy',24)
c1.printInfo()


        //Part 3
const countAge = (() => {
    let age = 0; 
        return() => {
            console.log(age)
            age++
        }
})()
countAge()
countAge()
countAge()
countAge()
countAge()
countAge()

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
const checkString = (str) => {
    return new Promise((resolve,reject) => {
        if (str.length > 10){
            resolve('Big word')
        }
        else{
            reject('Small Number')
        }
    })

}
console.log(checkString('Coding is not easy'))
console.log(checkString('Nice car'))


// https://www.codewars.com/kata/523b623152af8a30c6000027/train/python 
// INSTRUCTIONS: Now you have to write a function that takes an argument and returns the square of it.
function mySquare(n) {
    return n ** 2;
}
console.log(mySquare(3))

// https://www.codewars.com/kata/57f781872e3d8ca2a000007e
// INSTRUCTIONS: Given an array of integers, return a new array with each value doubled.

const numbers = [1,2,3];
function maps(numbers){
   return numbers.map(x => x * 2);
}
console.log(maps(numbers))