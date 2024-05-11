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
    return computerChoice
}

function getHumanChoice() {
    let humanChoice = prompt("Pick either 'rock', 'paper', or 'scissors'").toLowerCase();
    return humanChoice
}

function playGame() {

    function playRound(computerChoice, humanChoice) {

        computerChoice = getComputerChoice();
        humanChoice = getHumanChoice();
        
        if (humanChoice === computerChoice) {
            console.log(`You tie! ${humanChoice} ties with ${computerChoice}`);
        } else if ((humanChoice === 'rock' && computerChoice === 'paper') || (humanChoice === 'scissors' && computerChoice === 'rock') || (humanChoice === 'paper' && computerChoice === 'scissors')) {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
            ++computerScore;
        } else if ((humanChoice === 'rock' && computerChoice === 'scissors') || (humanChoice === 'paper' && computerChoice === 'rock') || (humanChoice === 'scissors' && computerChoice === 'paper')) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
            ++humanScore;
        }
    }

    let computerScore = 0;
    let humanScore = 0;
    
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();

    while (humanScore === computerScore) {
        playRound();
        if (humanScore > computerScore) {
            console.log('You win! :D');
            break
        } else if (humanScore < computerScore) {
            console.log('you lose :(');
            break
        } else {
            playRound();
        }
    } 
    if (humanScore > computerScore) {
        console.log('You win! :D');
    } else {
        console.log('you lose :(');
    }
}

playGame()