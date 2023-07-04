let playerScore = 0;
let computerScore = 0;


const rockButton = document.querySelector('.rock')
const scissorButton = document.querySelector('.scissor')
const paperButton = document.querySelector('.paper')
const result = document.querySelector('.result')

const getComputerChoice = () => {

const rps = ["rock", "paper", "scissors"]
const choices = rps[(Math.floor(Math.random() * rps.length))]
return choices
}


const playRound = (playerSelection, computerSelection) =>{
    if (playerSelection ===  computerSelection ){
        const p = document.createElement('p')
       p.innerText = `You draw! You both picked ${playerSelection} , play again`
    } 
else if (playerSelection === "rock" && computerSelection === "scissors"){
    const p = document.createElement('p')
    p.innerText = "You win! The computer picked Scissors"
    playerScore++
}
else if (playerSelection === "paper" && computerSelection === "rock"){
    const p = document.createElement('p')
    p.innerText = "You win! The computer picked Rock"
    playerScore++
}
else if (playerSelection === "scissors" && computerSelection === "paper"){
    const p = document.createElement('p')
    p.innerText = "You win! The computer picked Paper"
    playerScore++

}
else if (playerSelection === "rock" && computerSelection === "paper"){
    const p = document.createElement('p')
    p.innerText = "You lose! The computer picked Paper"
    computerScore++

}
else if (playerSelection === "paper" && computerSelection === "scissors"){
    const p = document.createElement('p')
    p.innerText = "You lose! The computer picked Scissors"
    computerScore++

}
else if (playerSelection === "scissors" && computerSelection === "rock"){
    const p = document.createElement('p')
    p.innerText =  "You lose! The computer picked Rock"
    computerScore++

}

}

rockButton.addEventListener('click', () => {
const computerSelection = getComputerChoice();
const playerSelection = "rock"
playRound(playerSelection, computerSelection)
})

paperButton.addEventListener('click', () => {
const computerSelection = getComputerChoice();
const playerSelection = "paper"
playRound(playerSelection, computerSelection)
})

scissorButton.addEventListener('click', () => {
const computerSelection = getComputerChoice();
const playerSelection = "scissor" 
playRound(playerSelection, computerSelection)
})



const game = () => {


const computerSelection = getComputerChoice();
//console.log(playerScore)
//console.log(computerScore)
console.log(playRound(playerSelection, computerSelection))

if (playerScore > computerScore){
    console.log("Congratulations you won, Nothing")
}
else if (playerScore < computerScore){
    console.log("Ha you lost to a computer, dumb human")
    
}
else if (playerScore === computerScore ){
    console.log("You draw, Play me again")
}
//console.log(playerScore, computerScore);


}