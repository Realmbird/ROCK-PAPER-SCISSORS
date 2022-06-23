let pscore = 0;
let cscore = 0;
function computerPlay(){
    let choice = Math.floor(Math.random()*3) + 1;
    switch (choice){
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissors";
            break;
        default:
            return `${choice}`;
    }
}
function playRound(playerSelection, computerSelection){
        if(playerSelection.toLowerCase() == computerSelection){
            return `You tie! ${playerSelection} does not beat ${computerSelection}`;  
        }else if(playerSelection.toLowerCase() == "rock"){
            if(computerSelection == "paper"){
                cscore++;
                return `You lose! ${computerSelection} beats ${playerSelection}`;
            }else if(computerSelection == "scissors"){
                pscore++;
                return `You win! ${playerSelection} beats ${computerSelection}`;
            }else{
                console.log(playerSelection);
                console.log(computerSelection);
                return "How error";
            } 
        }else if(playerSelection.toLowerCase() == "paper"){
            if(computerSelection == "scissors"){
                cscore++;
                return `You lose! ${computerSelection} beats ${playerSelection}`;
            }else if(computerSelection == "rock"){
                pscore++;
                return `You win! ${playerSelection} beats ${computerSelection}`;
            }else{
                console.log(playerSelection);
                console.log(computerSelection);
                return "How error";
            } 
        }else if(playerSelection.toLowerCase() == "scissors"){
            if(computerSelection == "rock"){
                cscore++;
                return `You lose! ${computerSelection} beats ${playerSelection}`;
            }else if(computerSelection == "paper"){
                pscore++;
                return `You win! ${playerSelection} beats ${computerSelection}`;
            }else{
                console.log(playerSelection);
                console.log(computerSelection);
                return "How error";
            } 
        }else{
            return "Invalid input, please return rock paper or scissors";
        }
    }
function game(){
    pscore = 0;
    cscore = 0; 
    for(let i = 0; i < 5; i++){
        let playerSelection = prompt("Rock Paper Scissors");
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection));
    }
    if(pscore > cscore){
        console.log("You win!");
    }else if(pscore == cscore){
        console.log("Tie!");
    }else{
        console.log("Computer Wins!")
    }
}
