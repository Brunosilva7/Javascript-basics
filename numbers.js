// we could declare two kind of number's function in javascript//
const weight1 = 2.1 // type of data "Number" != number   
const weight2 = Number ('3.0')  // Or we can call the function "Number" to declarate it. 

// to print the 2 variables
console.log(weight1, weight2)

// parameter to find which variable is a number
console.log(Number.isInteger (weight1))

const result1 = 5.456
const result2 = 5.059

const total = result1 * weight1 + result2 * weight2
const average = total / (weight1 + weight2)

if (average <= 8.0){
    console.log("the result is less than the average")
}
else{
    console.log
    ("You have passed")
}

/* function to reduce the blocks of numbers when it have printed on screen after the dot*/
console.log(average.toFixed(2))

/* function to throw back the value from the last shape to the first one */   
console.log(average.toString())

/* function to change the value from the last shape to binary form, you should add a value though the parentheses */ 
console.log(average.toString(2))
console.log(typeof Number)