/* we are going to save something through the function */
const printPlus = function(a , b){
    console.log(a + b)
}

printPlus(2 ,5)

// saving the function like arrow // 
const plus = (a, b) => {
    return a + b

}
console.log(plus(2, 7))

// the same without the word "return", but it'll execute just one line of code // 
const minus = (a, b) => a - b
console.log(minus(4, 7))

const print2 = c => console.log(c)
print2("Cool")