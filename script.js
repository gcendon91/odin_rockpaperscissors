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


// function game(){
//     let wins = 0;
//     let losses = 0;
//     for(let i= 1; i<6; i++)
//     {
//         let ronda = i;
//         let usuario = prompt('Ronda ' + ronda + '\nRock, Scissors or Paper? Choose wisely');
//         usuario = usuario.toLowerCase();        
        
//         let maquina = computerPlay();
//         maquina = maquina.toLowerCase();
//         alert("El usuario eligio: " + usuario + " La maquina eligio: " + maquina);
        
//         let result = letsPlay(usuario, maquina);
//         if(result === 1){
//             wins++;
//             alert("Bien, segui asi!");
//         }
//         else if (result === 2)
//         {
//             losses++;
//             alert("Te ganó, proba de nuevo");
//         }
//         else{
//             alert("Eligieron lo mismo");
//         }
        
//     }
//     alert("El resultado es usuario: " + wins + " La maquina: " +losses);
//     if(wins>losses)
//     {
//         alert("Ganaste!");
//     }
//     else if (wins<losses){
//         alert("Perdiste!");
//     }
//     else{
//         alert("Empate!");
//     }
// }