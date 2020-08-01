let isActive = false
console.log(isActive)

isActive = true
console.log(isActive)

isActive = 1
console.log(!!isActive)

console.log("the true cases")

/* let me show you some true cases */
console.log(!!3)
console.log(!!-1)
console.log(!!'  ')
console.log(!!'texto')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isActive = true))

console.log("the false cases")

console.log(!!0)
console.log(!!'')
console.log(!!null)
console.log(!!NaN)
console.log(!!undefined)
console.log(!!(isActive = false))

console.log('and the last example')

/* as the last one is true, the result is gonna be true */
console.log(!!('' || null || 0 || ' '))

/* applying for a const */
let nome = ''
console.log(nome || 'Desconhecido')