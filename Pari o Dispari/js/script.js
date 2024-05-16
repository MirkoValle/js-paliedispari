const choice = prompt("Scegli pari o dispari")
const userNumber = Number.parseInt(prompt("Inserisci un numero"), 10);
const randomNumber = numeroRandom()


function numeroRandom() {
    const randomNumber = Math.floor(Math.random() * 5 + 1);
    return randomNumber;
}

