/* function without the return */
function printPlus(a, b){
    console.log(a + b)

}
printPlus(3,5)
printPlus(2)
printPlus(2, 3, 5, 6, 7, 8, 10)
printPlus()
/* function with return */
function soma(a, b = 1) {
    return a + b
}
console.log(soma(2, 5))
console.log(soma(2))
console.log(soma())
