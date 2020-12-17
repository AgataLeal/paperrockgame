let round_result = document.querySelector('#round_result');
let playerScoreSpan = document.querySelector('#player-score');
let computerScoreSpan = document.querySelector('#computer-score');
let playerScore = 0
let computerScore = 0
function computerPlay() 
{
    const choices = ["ROCK", "PAPER", "SCISSORS"]
    const random = Math.floor(Math.random() * choices.length);
    return choices[random]
}

function singleRound(player)
{
    player = player.toUpperCase();
    let computer = computerPlay()
    let result;
    console.log("Player Choice:", player)
    console.log("Computer Choice:", computer)
    if (player === computer) {
        result = "That's a tie!"
    } else if (player === "SCISSORS") {
        if (computer === "ROCK") {
            result = "You Lose! Rock beats Scissors"
            ++computerScore
        } else {
            result = "You Win! Scissors beats Paper"
            ++playerScore
        }
    } else if (player === "PAPER") {
        if (computer === "ROCK") {
            result = "You Win! Paper beats Rock"
            ++playerScore
        } else {
            result = "You Lose! Scissors beats Paper"
            ++computerScore
        }
    } else if (player === "ROCK") {
        if (computer === "PAPER") {
            result = "You Lose! Paper beats Rock"
            ++computerScore
        } else {
            result = "You Win! Rock beats Scissors"
            ++playerScore
        }
    }
    console.log(result)
    round_result.textContent=result;
    playerScoreSpan.textContent= playerScore;
    computerScoreSpan.textContent= computerScore;
    
}