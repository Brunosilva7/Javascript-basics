const name = 'Rebeca'
const concatenate = 'hello' + name + '!'

// template in javascript,
const template = `
    hello
    ${name}!`
console.log(concatenate, template)

console.log(`1 + 1 = ${1 + 1}`)

/* it's possible to use a function into the template.
for example here I was adding the sentence "be carefull" whithin the const,
I was applying the parameter "to upper case" for this new text which I wanna add and I've called before in the function */
const up = text => text.toUpperCase()
console.log(`Hey .. ${up('be carefull')}!`) // pay attention! we must add the "`" before write the letter then in the end of it.

var a = 4
var b = 5

console.log(`Nove é ${a+b} e
não ${2 * a + b}.` );