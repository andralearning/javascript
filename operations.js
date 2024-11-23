// OPERATION MATHEMATIQUE

// Addition
console.log(5+3)
// Soustraction
console.log(5-3)
// Multiplication
console.log(5*3)
// Division
console.log(12/4)
// Modulo
console.log(10%3)
// Exposant
console.log(2 ** 8)

// Addition / Supression sur une variable
let age = 10
console.log('age de base : ', age)
age = age + 1
console.log('age + 1 : ', age)
age++
console.log('age + 1 : ', age)
age--
console.log('age - 1 : ', age)

// OPERATION LOGIQUE

// age == 11

// Egalitée => False
console.log( age == 12 )
// Egalitée Strict => True
console.log( age === 11)
// Egalitée Strict => False
console.log( age === "11")
// Egalitée => True
console.log( age == "11")

// Différence Strict => True
console.log( age !== "11")
// Différence => True
console.log( age != 12 )

// Supérieur ou égale à => True
console.log( age >= 8)

// Supérieur à => False
console.log( age > 17)

// Supérieur à OU inférieur à => True
console.log( age > 17 || age < 12)

// Supérieur à ET inférieur à => False
console.log( age > 17 && age < 12)
