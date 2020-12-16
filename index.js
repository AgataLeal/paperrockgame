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
        } else {
            result = "You Win! Scissors beats Paper"
        }
    } else if (player === "PAPER") {
        if (computer === "ROCK") {
            result = "You Win! Paper beats Rock"
        } else {
            result = "You Lose! Scissors beats Paper"
        }
    } else if (player === "ROCK") {
        if (computer === "PAPER") {
            result = "You Lose! Paper beats Rock"
        } else {
            result = "You Win! Rock beats Scissors"
        }
    }
    console.log(result)
    return result;
}