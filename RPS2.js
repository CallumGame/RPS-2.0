let playerScore = 0;
let computerScore = 0;



const getComputerChoice = () => {

const rps = ["rock", "paper", "scissors"]
const choices = rps[(Math.floor(Math.random() * rps.length))]
return choices
}


const playRound = (playerSelection, computerSelection) =>{
    if (playerSelection ===  computerSelection ){
        return `You draw! You both picked ${playerSelection} , play again`
    } 
else if (playerSelection === "rock" && computerSelection === "scissors"){
    playerScore++
    return "You win! The computer picked Scissors"
}
else if (playerSelection === "paper" && computerSelection === "rock"){
    playerScore++
    return "You win! The computer picked Rock"
}
else if (playerSelection === "scissors" && computerSelection === "paper"){
    playerScore++
    return "You win! The computer picked Paper"
}
else if (playerSelection === "rock" && computerSelection === "paper"){
    computerScore++
    return "You lose! The computer picked Paper"
}
else if (playerSelection === "paper" && computerSelection === "scissors"){
    computerScore++
    return "You lose! The computer picked Scissors"
}
else if (playerSelection === "scissors" && computerSelection === "rock"){
    computerScore++
    return "You lose! The computer picked Rock"
}

}



const button = document.querySelector('button');




const game = () => {
for (let i = 0; i < 5; i++) {
const playerSelection = prompt('choose rock paper or scissors', "I'm going to win").toLowerCase();
const computerSelection = getComputerChoice();
console.log(playerScore)
console.log(computerScore)
console.log(playRound(playerSelection, computerSelection))
}
if (playerScore > computerScore){
    console.log("Congratulations you won, Nothing")
}
else if (playerScore < computerScore){
    console.log("Ha you lost to a computer, dumb human")
    
}
else if (playerScore === computerScore ){
    console.log("You draw, Play me again")
}
console.log(playerScore, computerScore);


}





