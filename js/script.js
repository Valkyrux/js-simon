// assegno le costanti del mio script
const NumberOfNumber = 5;
const delay = 30;
const numbersOnDom = document.getElementById("random-numbers");
numbersOnDom.style = "text-align: center; color: red;"
// funzione che genera n prompt
function getPrompt (numOfPrompt) {
    let choosedNumber = [];
    for (let i = 0; i < numOfPrompt; i++) {
        choosedNumber[i] = parseInt(prompt("Inserisci un numero"));
    } 
    return choosedNumber;
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

function getResult() {
    const inputValues = getPrompt(NumberOfNumber);
    let score = 0;
    for (let i = 0; i < NumberOfNumber; i++) {
        if(randNumbers[i] == inputValues[i]) {
            console.log(inputValues[i], "   ",randNumbers[i], ': corretto');
            score++;
        } else {
            console.log(inputValues[i], "   ",randNumbers[i], ': sbagliato');
        }
    }
    return console.log("punteggio:", score);
}

console.log("Tu    Simon");
const randNumbers = getRandArray(NumberOfNumber, 1, 100);
numbersOnDom.append(randNumbers);
setTimeout(() => {numbersOnDom.innerHTML = ""}, 3000);
// ritardo per l'input
const timer = setTimeout(getResult, delay*1000);


