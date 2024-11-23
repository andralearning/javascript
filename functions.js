function callSomeone (){
    console.log("Hello There !")
}

callSomeone()
callSomeone()
callSomeone()
callSomeone()
callSomeone()

// DECLARATION

// Function -  function()
function addAName(){
    console.log("Name added !")
}
// Fonction Anonyme -  = function()
const adder = function(){
    console.log("Adder")
}
// Fonction Fléchée - = () =>
const subber = () => {
    console.log("subber")
}

addAName()
adder()
subber()

// PARAMETRE ET ARGUMENT - ()

function addition(a, b){
    console.log(a+b)
}
addition(2,5)
addition(9,13)
addition(22,5)

const sayHello = (name = "Edward") => {
    console.log(`Hello ${name} !`)
}
sayHello("Desmond")
sayHello()

// RETOURNER UNE VALEURE - return

function message(name) {
    return `Hola ${name}, how are you today ?`
}

console.log(message(message("Edward")))

// FONCTION IMBRIQUÉ - function(){function(){}}
function operationComplexe(x){
    function carre(n){
        return n*n
    }
    return carre(x) + carre(x)
}
console.trace(operationComplexe(5))