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
