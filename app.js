function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function startGame() {
    let card1 = getRandomIntInclusive(2, 11);
    let card2 = getRandomIntInclusive(2, 11);

    document.getElementById("player-cards").textContent = card1 + ", " + card2;
    document.getElementById("sum").textContent = "Sum: " + (parseInt(card1) + parseInt(card2));


}