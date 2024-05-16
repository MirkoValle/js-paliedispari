//PALINDROMA

const userWord = prompt("Inserisci una parola Palindroma");
let stringaInvertita = "";

//creo la stringa con le lettere invertite
for (let i = userWord.length - 1; i >= 0; i--) {
    stringaInvertita += userWord[i];
}

//Invio un output in base alla risposta ricevuta dalla funzione
if (verifica(userWord, stringaInvertita) == true) {
    console.log(userWord + " + " + stringaInvertita + "= vero");
} else {
    console.log(userWord + " + " + stringaInvertita + "= falso");
}

//Verifico se le due parole sono palindrome (ovvero uguali)
function verifica(word, invertedWord) {

    if (word === invertedWord) {
        return true;
    } else {
        return false;
    }

}