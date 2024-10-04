/* 
Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
 */

let userNumber = Number(prompt('inserici un numero da 1 a 5'));

function generateRandomNumber() {
    return randomNumber = Math.floor(Math.random() * 5) + 1;
}

let sun = userNumber + generateRandomNumber();

function evenOrOdd() {
    if (sun % 2 === 0) {
        return `Il numero ${sun} è pari`;
    } else {
        return `Il numero ${sun} è dispari`;
    }
} 

console.log(evenOrOdd())