const users = { nom: "Alice", age: 25, actif: true }
const fruits = ["pomme", "banane", "orange"]


// BOUCLES FOR

for (let i=0; i < 5; i++){
    console.log(`Valeur de la boucle FOR actuelle : ${i}`)
}


// BOUCLES WHILE

let counter = 0

while (counter < 6){
    console.log(`Valeur de counter WHILE : ${counter}`)
    counter ++
}

// BOUCLES Do WHILE
counter = 0
do {
    console.log(`Valeur de counter DO - WHILE : ${counter}`)
    counter ++
}
while (counter < 6)

// BOUCLES FOREACH

fruits.forEach((fruit, index) => {
    console.log(`Valeur ForEach, index : ${index} - Fruit : ${fruit}`)
})

// BOUCLES FOR OF

for(const fruit of fruits){
    console.log(`Valeur ForOf - Fruit : ${fruit}`)
}

// BOUCLES FOR IN

for (const key in users){
    console.log(`Valeur ForIn - ${key} : ${users[key]}`)
}