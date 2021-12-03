// assegno le costanti del mio script
let difficuly = prompt("inserisci la difficoltà (facile, medio, difficile)");
const delay = 32;
const maxNumber = 100;
const numbersOnDom = document.getElementById("random-numbers");
numbersOnDom.style = "text-align: center; color: red;"
while (difficuly != "facile" && difficuly != "medio" && difficuly != "difficile") {
    difficuly = prompt("inserisci la difficoltà (facile, medio, difficile)");
}
// switch per selezionare la difficoltà
let NumberOfNumber;
switch (difficuly) {
    case "facile":
        NumberOfNumber = 5;
        break 
    case "medio":
        NumberOfNumber = 10;
        break 
    case "difficile":
        NumberOfNumber = 20;
        break 
} 
// funzione che genera n prompt e controlla che siano diversi e controllo che siano numeri maggiori di 0 e minori di maxNumber
function getPrompt (numOfPrompt, maxPromptValue) {
    let choosedNumbers = [];
    while (choosedNumbers.length < numOfPrompt) {
        let aPromptNumber = parseInt(prompt("Inserisci un numero"));
        if (!choosedNumbers.includes(aPromptNumber) && aPromptNumber > 0 && aPromptNumber <= maxPromptValue) {
            choosedNumbers.push(aPromptNumber);
        } else {
            let aNewPromptNumber = aPromptNumber;
            while(choosedNumbers.includes(aNewPromptNumber) || aNewPromptNumber <= 0 || aNewPromptNumber > maxPromptValue) {
                aNewPromptNumber = parseInt(prompt("numero non valido riprovare!")); 
            }
            choosedNumbers.push(aNewPromptNumber);
        }
    } 
    return choosedNumbers;
}
// funzione che genera un array di lungezza arrayLength che appende i suoi valori all'interno del DOM
function getRandArray(arrayLength, minValue, maxValue) {
    const randArray = [];
    while (randArray.length < arrayLength) {
        let rand = Math.floor(Math.random()*(maxValue - minValue + 1) + minValue);
        if (!randArray.includes(rand)) {
            randArray.push(rand);
        }
    }
    return randArray;
}
// funzione che controlla gli array e assegna il punteggio, tiene anche conto dei doppioni (lo avevo fatto prima di vedere i bonus OMG)
function getResult() {
    const inputValues = getPrompt(NumberOfNumber, maxNumber);
    let score = 0;
    for (let i = 0; i < NumberOfNumber; i++) {
        let uniquenessCheck = true;
        for (let k = 0; k < i; k++) {
            if(inputValues[k] == inputValues[i]){
                uniquenessCheck = false;
            }
        }
        if(uniquenessCheck && randNumbers.includes(inputValues[i])) {
            console.log(randNumbers[i], "     ", inputValues[i],': corretto');
            score++;
        } else {
            console.log(randNumbers[i], "     ", inputValues[i],': sbagliato');
        }
    }
    return console.log("punteggio:", score);
}
// scipt che chiama le funzioni
console.log("Tu      Simon");
const randNumbers = getRandArray(NumberOfNumber, 1, 100);
numbersOnDom.append(randNumbers);
setTimeout(() => {numbersOnDom.innerHTML = ""}, 2000);
// ritardo per l'input
const timer = setTimeout(getResult, delay*1000);