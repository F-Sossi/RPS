function computerPlay(){
    cThrow = Math.floor(Math.random() * 3) + 1;

    console.log(cThrow);

    switch(cThrow){
        case 1:
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
        console.log(input)

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
        return `Player threw ${player} and the computer threw ${computer} Player wins`;
    }else if(player === 'scissors' && computer === 'paper'){
        return `Player threw ${player} and the computer threw ${computer} Player wins`;
    }else if(player === 'paper' && computer === 'rock'){
        return `Player threw ${player} and the computer threw ${computer} Player wins`;
    }else{
        return `Player threw ${player} and the computer threw ${computer} Computer wins`;
    }

}

const rock = document.querySelector('#rock');
rock.addEventListener('click', function(){console.log(playRound("rock", computerPlay()));});

const paper = document.querySelector('#paper');
paper.addEventListener('click', function(){console.log(playRound("paper", computerPlay()));});

const scissors = document.querySelector('#scissors');
scissors.addEventListener('click', function(){console.log(playRound("scissors", computerPlay()));});