const NumberOfNumber = 5;
const randNumbers = [];
const delay = 30;
const numbersOnDom = document.getElementById("random-numbers");
numbersOnDom.style = "text-align: center; color: red;"

function getPrompt () {
    let choosedNumber = [];
    for (let i = 0; i < NumberOfNumber; i++) {
        choosedNumber[i] = parseInt(prompt("Inserisci un numero"));
    } 
    return choosedNumber;
}

function getResult () {
    const inputValues = getPrompt();
    let score = 0;
    for (let i = 0; i < NumberOfNumber; i++) {
        if(inputValues[i] == randNumbers[i]) {
            console.log(inputValues[i], "=", randNumbers[i], ": corretto");
            score++;
        } else {
            console.log(inputValues[i], "=", randNumbers[i], ": sbagliato");
        }
    }
    return console.log("punteggio:", score);
}



while (randNumbers.length < NumberOfNumber) {
    let rand = Math.floor(Math.random()*100) + 1;
    if (!randNumbers.includes(rand)) {
        randNumbers.push(rand);
        numbersOnDom.append(rand + " ");
    }
}
setTimeout(() => {numbersOnDom.style = "display: none"}, 2000);

const timer = setTimeout(getResult, delay*1000);

