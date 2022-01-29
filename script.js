function computerPlay() {
    var result = ['Rock', 'Paper', 'Scissors'][Math.floor(Math.random() * 3)];
    
    return result;
}


function letsPlay(playerSelection, computerSelection){

    if(playerSelection==='rock'&&computerSelection==='scissors')
    {
        return 1
    }
    else if(playerSelection==='scissors'&&computerSelection==='paper')
    {
        return 1
    }
    else if(playerSelection==='paper'&&computerSelection==='rock')
    {
        return 1
    }
    else if(playerSelection==='paper'&&computerSelection==='scissors')
    {
        return 2
    }
    else if(playerSelection==='rock'&&computerSelection==='paper')
    {
        return 2
    }
    else if(playerSelection==='scissors'&&computerSelection==='rock')
    {
        return 2
    }
    else if(playerSelection===computerSelection)
    {
        return console.log("Empate")
    }
    else
    {
        return console.log("Elección invalida")
    }
    
}

function game(){
    let wins = 0;
    let losses = 0;
    for(let i= 1; i<6; i++)
    {
        let ronda = i;
        let usuario = prompt('Ronda ' + ronda + '\nRock, Scissors or Paper? Choose wisely');
        usuario = usuario.toLowerCase();        
        
        let maquina = computerPlay();
        maquina = maquina.toLowerCase();
        alert("El usuario eligio: " + usuario + " La maquina eligio: " + maquina);
        
        let result = letsPlay(usuario, maquina);
        if(result === 1){
            wins++;
            alert("Bien, segui asi!");
        }
        else if (result === 2)
        {
            losses++;
            alert("Te ganó, proba de nuevo");
        }
        else{
            alert("Eligieron lo mismo");
        }
        
    }
    alert("El resultado es usuario: " + wins + " La maquina: " +losses);
    if(wins>losses)
    {
        alert("Ganaste!");
    }
    else if (wins<losses){
        alert("Perdiste!");
    }
    else{
        alert("Empate!");
    }
}