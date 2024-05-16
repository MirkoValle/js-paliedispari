const choice = prompt("Scegli pari o dispari")
const userNumber = Number.parseInt(prompt("Inserisci un numero"), 10);
const randomNumber = numeroRandom()
const risultato = somma(randomNumber, userNumber)

function numeroRandom() {
    const randomNumber = Math.floor(Math.random() * 5 + 1);
    return randomNumber;
}

function somma(numeroCasuale, numeroUtente) {

    const sum = numeroCasuale + numeroUtente

    if (sum % 2 == 0) {
        return "pari";
    } else {
        return "dispari";
    }

}


console.log("Numero scelto = " + userNumber);
console.log("Numero casuale= " + randomNumber);
console.log("Ovvero= " + risultato);
console.log("Tu hai scelto= " + choice);

if (choice === risultato) {
    console.log("Complimenti hai vinto!")
} else {
    console.log("Mi dispiace hai perso!")
}

