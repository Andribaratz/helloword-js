function calcolasomma(){
let numero1=parseFloat(document.getElementById("numero1").value);
let numero2=parseFloat(document.getElementById("numero2").value);
let somma = numero1 + numero2;
document.getElementById("risultato").innerText = "la somma e: " + somma;
}
console.log("ciaoo mondo");
console.log("come stai?");

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Scrivi qualcosa: ", function (risposta) {
    console.log("Hai scritto:", risposta);
    rl.close();
});
