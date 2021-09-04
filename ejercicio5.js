let weight;
let height;
let imc;
weight = parseFloat(prompt("Escriba su peso"));
height = parseFloat(prompt("Escriba su altura"));
imc = weight/(height**2);
console.log("Tu IMC es" + " " + imc);