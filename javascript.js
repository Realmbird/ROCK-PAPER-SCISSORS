//sets scores
let pscore = 0;
let cscore = 0;
const result = document.querySelector(".results");
const score = document.querySelector(".score");
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
            return `You tie!`;  
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
function updateScore(){
    let player = "Player: " + pscore;
    let computer = "Computer: " + cscore;
    let update = player + "     " + computer;
    score.textContent = update;
    if(pscore == 5){
        result.textContent = "You win!";
        console.log("You win!");
    }
    if(cscore == 5){
        console.log("Computer Wins!")
        result.textContent = "Computer wins!";
    }
}
updateScore();
function play(e){
    let choice = this.className;
    result.textContent = playRound(choice, computerPlay());
    updateScore();
}
const rock = document.querySelector(".Rock");
rock.addEventListener("click", play);
const paper = document.querySelector(".Paper");
paper.addEventListener("click", play);
const scissors = document.querySelector(".Scissors");
scissors.addEventListener("click", play);



