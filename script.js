let computerScore = 0;
let humanScore = 0;
let buttons = document.querySelector('#buttons');
let winner = document.querySelector('#winner');

function getComputerChoice() {
    let randInt = Math.floor(Math.random() * 3);
    let computerChoice;
    if (randInt === 0) {
        computerChoice = "rock";
    } else if (randInt === 1) {
        computerChoice = "paper";
    } else {
        computerChoice = "scissors";
    }
    return computerChoice;
}

function playRound() {
    const results = document.querySelector("#results");
    computerChoice = getComputerChoice();

        
    if (humanChoice === computerChoice) {
            results.textContent = `You tie! ${humanChoice} ties with ${computerChoice}`;
    } else if ((humanChoice === 'rock' && computerChoice === 'paper') || 
               (humanChoice === 'scissors' && computerChoice === 'rock') || 
               (humanChoice === 'paper' && computerChoice === 'scissors')) {
        results.textContent = `You lose! ${computerChoice} beats ${humanChoice}!`;
        ++computerScore;
    } else if ((humanChoice === 'rock' && computerChoice === 'scissors') || 
               (humanChoice === 'paper' && computerChoice === 'rock') || 
               (humanChoice === 'scissors' && computerChoice === 'paper')) {
        results.textContent = `You win! ${humanChoice} beats ${computerChoice}!`;
        ++humanScore;
    }
    if (humanScore >= 5 && computerScore < 5) {
        winner.textContent = 'You win! :D';
        winner.style.backgroundColor = 'yellow'
    } else if (computerScore >= 5 && humanScore < 5) {
        winner.textContent = 'you lose :(';
        winner.style.backgroundColor = 'yellow'
    } else if (humanScore >= 5 && computerScore >= 5) {
        winner.textContent = 'reload the page to play again'
        winner.style.backgroundColor = 'red'
    } else {
        winner.textContent = 'play more games!'
    }
}

buttons.addEventListener('click', (event) => {
    let target = event.target;
    
    switch(target.id) {
        case 'rock':
            humanChoice = 'rock';
            break;
        case 'paper':
            humanChoice = 'paper';
            break;
        case 'scissors':
            humanChoice = 'scissors';
            break;
    }
    playRound()
});