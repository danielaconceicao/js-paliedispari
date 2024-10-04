/* 
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
 */

let userNumber = 4; /* prompt('inserici un numero da 1 a 5') */; 
/* let randomNumber = parseInt(Math.random() * 5 + 1); */

function generateRandomNumber() {
    return randomNumber = parseInt(Math.random() * 5 + 1);
}

function evenOrOdd() {
    let sun = userNumber + generateRandomNumber();

    if (sun % 2 === 0) {
        console.log(`Il numero ${sun} è pari`);
    } else {
        console.log(`Il numero ${sun} è dispari`);
    }
} 

/* console.log(generateRandomNumber()); */

console.log(evenOrOdd())