let computerScore = 0;
let playerScore = 0;
const maxScore = 5
const winMessage = "You have beat the Machine it will not be so easy next time \n press your throw to play again";
const loseMessage = "The computer wins as was inevitable \n Press your next throw as you enjoy losing";

function resetScore(){
    computerScore = 0;
    playerScore = 0;
}

function computerPlay(){
    cThrow = Math.floor(Math.random() * 3) + 1;

    switch(cThrow){
        case 1:
            output.textContent= "computer threw rock";
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors"
            break;
    }
}

function playerThrow(){

    while(true){
        let entry = prompt("Enter your Throw");
        let input = entry.toLowerCase();

        if(input == 'rock' || input == 'paper' || input == 'scissors'){
            return input;
        }else{
            alert("Invalid entry  enter Rock, Paper or Scissors")
        }
    }
}

function playRound(player, computer){

    if(player === computer){
        return `Player threw ${player} and the computer threw ${computer} draw`;
    }else if(player === 'rock' && computer === 'scissors'){
        playerScore++;
        if(playerScore == maxScore){
            resetScore();
            return winMessage
        }else{
            return `Player threw ${player} and the computer threw ${computer} Player wins \n Player ${playerScore} Computer ${computerScore}`;
        }
    }else if(player === 'scissors' && computer === 'paper'){
        playerScore++;
        if(playerScore == maxScore){
            resetScore();
            return winMessage
        }else{
            return `Player threw ${player} and the computer threw ${computer} Player wins \n Player ${playerScore} Computer ${computerScore}`;
        }
    }else if(player === 'paper' && computer === 'rock'){
        playerScore++;
        if(playerScore == maxScore){
            resetScore();
            return winMessage
        }else{
            return `Player threw ${player} and the computer threw ${computer} Player wins \n Player ${playerScore} Computer ${computerScore}`;
        }
    }else{
        computerScore++;
        if(computerScore == maxScore){
            resetScore();
            return loseMessage;
        }else{
            return `Player threw ${player} and the computer threw ${computer} Computer wins \n Player ${playerScore} Computer ${computerScore}`;
        }
    }

}


const output = document.querySelector('#output');
// adding some comments to check something
const rock = document.querySelector('#rock');
rock.addEventListener('click', function(){output.textContent = playRound("rock", computerPlay());});

const paper = document.querySelector('#paper');
paper.addEventListener('click', function(){output.textContent =playRound("paper", computerPlay());});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', function(){output.textContent = playRound("scissors", computerPlay());});