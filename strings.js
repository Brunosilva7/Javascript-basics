const school = "Cod3ing"

// function to find what's the position of each letter on coding.
console.log(school.charAt(2))

// function to find what is the sign or number which the element represent on "unicode" table.
console.log(school.charCodeAt(4))

console.log(school.indexOf('3'))

// function to print the elements from the index 2 on the const to the last one.
console.log(school.substring(2))

// function to print from the index 0 to the second one without the index 3 which we put it though the parentheses.
console.log(school.substring(0, 3))

// function to concatenate a literal element that doesn't exist yet and add whithin the const which already exist. 
console.log('Private '.concat(school).concat("!"))

console.log(school.replace(3, 'i'))

// function to create an array and separate the index with the sign or element which we have put it.
console.log('javascript,PHP,html'.split(','))