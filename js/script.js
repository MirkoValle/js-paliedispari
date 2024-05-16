//PALINDROMA

const userWord = prompt("Inserisci una parola Palindroma");

function verifica(word) {

    let stringaInvertita = "";

    for (let i = word.length - 1; i >= 0; i--) {
        stringaInvertita += word[i];
    }


    if (word === stringaInvertita) {
        console.log(word + " + " + stringaInvertita + "= vero");
        return true;
    } else {
        console.log(word + " + " + stringaInvertita + "= falso");
        return false;
    }


}

verifica(userWord)