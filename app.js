let currentSum;

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function startGame() {
    let card1 = getRandomIntInclusive(2, 11);
    let card2 = getRandomIntInclusive(2, 11);

    if (card1 + card2 < 21) {
        document.getElementById("result").textContent = "Under 21, draw another card or hold";
    } else if (card1 + card2 == 21) {
        document.getElementById("result").textContent = "You got a blackjack!";
    }

    document.getElementById("player-cards").textContent = card1 + ", " + card2;
    currentSum = card1 + card2;
    document.getElementById("sum").textContent = "Sum: " + currentSum;
}

function draw() {
    let newCard = getRandomIntInclusive(2, 11);
    let currentCards = document.getElementById("player-cards");
    currentCards.textContent = currentCards.textContent + ", " + newCard;
    let sum = document.getElementById("sum");
    currentSum += newCard;

    if (currentSum > 21) {
        document.getElementById("result").textContent = "Your hand is over 21, you lose :(";
    } else if (currentSum == 21) {
        document.getElementById("result").textContent = "You got a blackjack!";
    } else {
        document.getElementById("result").textContent = "Under 21, draw another card or hold";
    }

    sum.textContent = "Sum: " + currentSum;
}