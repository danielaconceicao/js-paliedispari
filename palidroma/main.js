let userWord = prompt('inserire una palora');

function checksWordIsAPolydrome() {
    let invertedParole = userWord.split('').reverse().join('');

    if ( userWord === invertedParole) {
        console.log(`${userWord} è palindroma`);
    } else {
        console.log(`${userWord} non è palindroma`);
    }
}

checksWordIsAPolydrome('mirim')