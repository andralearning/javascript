
//CONDITIONS

let age = 19

if (age > 18){
    console.log("Vous êtes majeur !")
}
else if (age === 18){
    console.log("Vous venez de débloquer la majoritée !")
}
else{
    console.log("Vous êtes mineur !")
}

//CONDITIONS TERNAIRES
let message = `Vous êtes : ${age >= 18 ?"Majeur" :"Mineur"}`
console.log(message)

// SWITCH CASE
let jour = 8

switch (jour){
    case 1:
        console.log("Nous sommes lundi !")
        break
    case 2:
        console.log("Nous sommes Mardi !")
        break
    case 3:
        console.log("Nous sommes Mercredi !")
        break
    case 4:
        console.log("Nous sommes Jeudi !")
        break
    default:
        console.log("Nous sommes un certains jour !")
}