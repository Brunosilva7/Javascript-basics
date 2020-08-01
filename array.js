/* Array we could get through the elements, we write the "const name" + '[nº]' */
const Value = [8.2, 9.3, 8.4, 4.1]
console.log(Value[3], Value[1])

/* in other language, if we try to get into an element that's not whithin our list. 
It's gonna appear an error, in javascript is not like this */
console.log(Value[5])

/* we could add the element and give a value for it */
Value[5] = 10
console.log(Value)

/* how many elements we have through the array */
console.log(Value.length)

/* you can add some elements */
Value.push({id: 34}, null, false, 'teste')
console.log(Value)

/* I can delete the last element "pop" function */
console.log(Value.pop())
delete Value[0]
console.log(Value)

console.log(typeof Value)