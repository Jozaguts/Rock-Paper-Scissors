let playerScore =0; /* variable para llevar el conteo de los marcadores */
let computerScore=0;

let computerSelection= ""; /*variable para capturar la opción del sistema */
function computerPlay() {/*función para crear elegir una opción de forma aleatoria  */
    const randomChoice = Math.floor((Math.random() * 3) + 1); /* generamos un numero al azar del 1 al 3 */
    /* evaluamos randomChoice (1 2 3) de pendiendo del numero se realiza una acción   */
    switch (randomChoice) { 
        case 1: /* si randomChoice es igual a 1 entonces el valor de systemChoice es Rock */
            systemChoice = "rock" /* aquí se cambia el valor a systemChoice */
            break; /* después de hacer el cambio a la variable el break te manda al Return */
        case 2:
            systemChoice = "paper" 
            break;
        case 3:
            systemChoice = "scissors"
            break; 
        default:
            break;
    }
    return systemChoice; /* return básicamente regresa el valor de systemChoice y como el valor es definido por el randomChoice la respuesta siempre sera aleatoria   */
}

let playRound = (playerSelection, computerSelection) => { //play round func
    let result = '';

    switch(computerSelection) {
        case 'rock': //when case is choice
        (playerSelection =='paper') ? result = `${playerSelection} vs ${computerSelection} - You WIN`: //output result
        (playerSelection == 'scissors') ? result = `${playerSelection} vs ${computerSelection} - You LOSE` : 
        (playerSelection == computerSelection) ? result = 'DRAW' : result = 'invalid choice'; //same selection then tie, other inputs by player are invalid
        break;
        case 'paper': 
        (playerSelection =='scissors') ? result = `${playerSelection} vs ${computerSelection} - You WIN` : 
        (playerSelection == 'rock') ? result = `${playerSelection} vs ${computerSelection} - You LOSE` : 
        (playerSelection == computerSelection) ? result = 'DRAW' : result = 'invalid choice';
        break;
        case 'scissors': 
        (playerSelection =='rock') ? result = `${playerSelection} vs ${computerSelection} - You WIN` : 
        (playerSelection == 'paper') ? result = `${playerSelection} vs ${computerSelection} - You LOSE`: 
        (playerSelection == computerSelection) ? result = 'DRAW' : result = 'invalid choice';
        break;
    }
    return result;
}

let scoreReset=()=>{
    playerScore=0;
    computerScore=0;
}

let game =()=>{
    for (let index = 0; index < 5; index++) {
        let playerSelection = prompt('Enter ROCK, PAPER or SCISSORS').toLowerCase();
        let computerSelection = computerPlay();
        let gameRound = playRound(playerSelection,computerSelection);
        (gameRound.includes('DRAW') || gameRound.includes('invalid choice')) ? playerScore+=0 : 
		(gameRound.includes('DRAW') || gameRound.includes('invalid choice')) ? computerScore+=0 :
        (gameRound.includes('WIN')) ? playerScore +=1 : computerScore+=1;
        console.log(gameRound);
        
    }
    console.log(gameResult());
}

let gameResult = () => { //output msg based on result
    let output = '';
    (playerScore === 0 && computerScore === 0) ? output = alert('Stop leaving it empty!') :
    (playerScore == computerScore) ? output = `Its a tie! \nCOMP SCORE: ${computerScore} \nPLAYER SCORE: ${playerScore}` :
    (playerScore < computerScore) ? output = `Computer wins the game! \nCOMP SCORE: ${computerScore} \nPLAYER SCORE: ${playerScore}` : output = `Player wins the game! \nCOMP SCORE: ${computerScore} \nPLAYER SCORE: ${playerScore}`;
    scoreReset(); //score rest func call
    return output;
}