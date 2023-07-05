let playerScore = 0;
let computerScore = 0;


const rockButton = document.querySelector('#rock')
const scissorButton = document.querySelector('#scissor')
const paperButton = document.querySelector('#paper')
const result = document.querySelector('#result')
const container = document.querySelector('#container');
const reset = document.querySelector('#reset')

const getComputerChoice = () => {

const rps = ["rock", "paper", "scissors"]
const choices = rps[(Math.floor(Math.random() * rps.length))]
return choices
}


const playRound = (playerSelection, computerSelection) =>{

    if (playerSelection ===  computerSelection ){
        const p = document.createElement('p')
       p.innerText = `You draw! You both picked ${playerSelection} , play again`
       result.appendChild(p)
    } 
else if (playerSelection === "rock" && computerSelection === "scissors"){
    playerScore++
    const p = document.createElement('p')
    p.innerText = "You win! The computer picked Scissors"
    result.appendChild(p)
}
else if (playerSelection === "paper" && computerSelection === "rock"){
    playerScore++
    const p = document.createElement('p')
    p.innerText = "You win! The computer picked Rock"
    result.appendChild(p)
}
else if (playerSelection === "scissors" && computerSelection === "paper"){
    playerScore++
    const p = document.createElement('p')
    p.innerText = "You win! The computer picked Paper"
    result.appendChild(p)

}
else if (playerSelection === "rock" && computerSelection === "paper"){
    computerScore++
    const p = document.createElement('p')
    p.innerText = "You lose! The computer picked Paper"
    result.appendChild(p)
}
else if (playerSelection === "paper" && computerSelection === "scissors"){
    computerScore++
    const p = document.createElement('p')
    p.innerText = "You lose! The computer picked Scissors"
    result.appendChild(p)
}
else if (playerSelection === "scissors" && computerSelection === "rock"){
    computerScore++
    const p = document.createElement('p')
    p.innerText =  "You lose! The computer picked Rock"
    result.appendChild(p)
}

}

const winner = (playerScore, computerScore) => {
if (playerScore === 5){
    const h3 = document.createElement('h3')
    h3.classList.add('PlayerWin')
    h3.innerText = `Congratulations you win! Nothing, you beat the computer by ${playerScore} to ${computerScore}.`
    result.append(h3)
    playAgain()
} 
else if (computerScore === 5){
    const h3 = document.createElement('h3')
    h3.classList.add('PlayerWin')
    h3.innerText = `HJFHJDH you lose!, you were beaten by the computer by ${computerScore} to ${playerScore}.`
    result.append(h3)
    playAgain()
}
}


const playAgain = () =>{
    const button = document.createElement('button')
    button.innerText = 'play again'
    reset.appendChild(button)
}


rockButton.addEventListener('click', () => {
const computerSelection = getComputerChoice()
const playerSelection = 'rock'
playRound(playerSelection, computerSelection)
winner(playerScore, computerScore)
})

paperButton.addEventListener('click', () => {
const computerSelection = getComputerChoice()
const playerSelection = "paper"
playRound(playerSelection, computerSelection)
winner(playerScore, computerScore)
})

scissorButton.addEventListener('click', () => {
const computerSelection = getComputerChoice()
const playerSelection = "scissor" 
playRound(playerSelection, computerSelection)
winner(playerScore, computerScore)
})


/*
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
*/