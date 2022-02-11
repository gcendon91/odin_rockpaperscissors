let wins = 0;
let losses = 0;

const buttons = document.querySelectorAll(".button")
const resetBtn= document.querySelector(".reset");
resetBtn.addEventListener('click',() => location.reload());
buttons.forEach(button => {
    button.addEventListener('click', function () {
        letsPlay(button.id);
    })
})
function computerPlay() {
    var result = ['Rock', 'Paper', 'Scissors'][Math.floor(Math.random() * 3)];

    return result;
}

function letsPlay(playerSelection) {

    let computerSelection = computerPlay();
    let computerSelectionUndercase = computerSelection.toLowerCase();

    if (playerSelection === 'rock' && computerSelectionUndercase === 'scissors') {
        wins++;
        document.querySelector(".result").innerText = "You won! you chose " + playerSelection + " and the machine chose " + computerSelectionUndercase;
        document.querySelector(".score").innerText = "Your score: " + wins + "Machine score: " + losses;

    }
    else if (playerSelection === 'scissors' && computerSelectionUndercase === 'paper') {
        wins++;
        document.querySelector(".result").innerText = "You won! you chose " + playerSelection + " and the machine chose " + computerSelectionUndercase;

        document.querySelector(".score").innerText = "Your score: " + wins + " Machine score: " + losses;
    }
    else if (playerSelection === 'paper' && computerSelectionUndercase === 'rock') {
        wins++;
        document.querySelector(".result").innerText = "You won! you chose " + playerSelection + " and the machine chose " + computerSelectionUndercase;

        document.querySelector(".score").innerText = "Your score: " + wins + " Machine score: " + losses;
    }
    else if (playerSelection === 'paper' && computerSelectionUndercase === 'scissors') {
        losses++;
        document.querySelector(".result").innerText = "You lose! you chose " + playerSelection + " and the machine chose " + computerSelectionUndercase;

        document.querySelector(".score").innerText = "Your score: " + wins + " Machine score: " + losses;
    }
    else if (playerSelection === 'rock' && computerSelectionUndercase === 'paper') {
        losses++;
        document.querySelector(".result").innerText = "You lose! you chose " + playerSelection + " and the machine chose " + computerSelectionUndercase;

        document.querySelector(".score").innerText = "Your score: " + wins + " Machine score: " + losses;
    }
    else if (playerSelection === 'scissors' && computerSelectionUndercase === 'rock') {
        losses++;
        document.querySelector(".result").innerText = "You lose! you chose " + playerSelection + " and the machine chose " + computerSelectionUndercase;

        document.querySelector(".score").innerText = "Your score: " + wins + " Machine score: " + losses;
    }
    else if (playerSelection === computerSelectionUndercase) {
        document.querySelector(".result").innerText = "It's a tie! you chose " + playerSelection + " and the machine chose " + computerSelectionUndercase;

        document.querySelector(".score").innerText = "Your score: " + wins + " Machine score: " + losses;
    }
    checkScore(wins, losses);
}
function checkScore(wins, losses) {
    if (wins === 5) {
        buttons.forEach(button => button.disabled = true);
        document.querySelector(".h2").innerText = "You won!!! Congrats!!!";
    }
    else if (losses === 5) {
        buttons.forEach(button => button.disabled = true);
        document.querySelector(".h2").innerText = "You lost, better luck next time!";
    }
}
