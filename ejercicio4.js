let userName;
let presentYear;
let userYear;
let userAge;
userName = prompt("Escriba su nombre");
presentYear = parseInt(prompt("Escriba el año actual"));
userYear = parseInt(prompt("Escriba su año de nacimiento"));
userAge = presentYear - userYear;
console.log("Hola" + " " + userName + ", " + "tienes" + " " + userAge + " " + "años");