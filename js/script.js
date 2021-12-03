const NumberOfNumber = 5;
const randNumbers = [];
const numbersOnDom = document.getElementById("random-numbers")
numbersOnDom.style = "text-align: center; color: red;"

while (randNumbers.length < NumberOfNumber) {
    let rand = Math.floor(Math.random()*100) + 1;
    if (!randNumbers.includes(rand)) {
        randNumbers.push(rand);
        numbersOnDom.append(rand + " ");
    }
}

setTimeout(() => {numbersOnDom.style = "display: none"}, 3000);