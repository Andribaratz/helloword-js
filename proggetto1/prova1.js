function calcolasomma(){
let numero1=parseFloat(document.getElementById("numero1").value);
let numero2=parseFloat(document.getElementById("numero2").value);
let somma = numero1 + numero2;
document.getElementById("risultato").innerText = "la somma e: " + somma;
}
