function computerPlay() {
    var result = ['Rock', 'Paper', 'Scissors'][Math.floor(Math.random() * 3)];
    
    return console.log(result.toLowerCase());
}


function letsPlay(playerSelection, computerSelection){

    if(playerSelection==='rock'&&computerSelection==='scissors')
    {
        return console.log("El jugador gana")
    }
    else if(playerSelection==='scissors'&&computerSelection==='paper')
    {
        return console.log("El jugador gana")
    }
    else if(playerSelection==='paper'&&computerSelection==='rock')
    {
        return console.log("El jugador gana")
    }
    else if(playerSelection==='paper'&&computerSelection==='scissors')
    {
        return console.log("La maquina gana")
    }
    else if(playerSelection==='rock'&&computerSelection==='paper')
    {
        return console.log("La maquina gana")
    }
    else if(playerSelection==='scissors'&&computerSelection==='rock')
    {
        return console.log("La maquina gana")
    }
    else if(playerSelection===computerSelection)
    {
        return console.log("Empate")
    }
    
}

function game(){
    for(let i= 0; i<5; i++)
    {
        let usuario = prompt('Rock, Scissors or Paper? Choose wisely');
        usuario = usuario.toLowerCase();
        letsPlay(usuario, computerPlay());
    }
}