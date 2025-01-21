function getComputerChoice() {
    let computer_choice = Math.floor(Math.random() * 3)

    if (computer_choice === 0) {
        return "Rock"
    }
    else if (computer_choice === 1) {
        return "Paper"
    }
    else {
        return "Scissors"
    }
}


function getHumanChoice() {
    let user_input = prompt("Enter rock, paper, or scissors: ")

    if (user_input === 'rock') {
        return "Rock"
    }
    else if(user_input === 'paper') {
        return "Paper"
    }
    else if (user_input === 'scissors') {
        return "Scissors"
    }
    else {
        return "Error. Make sure to enter rock, paper or scissors only!"
    }
}


function playGame() {
    let humanScore = 0
    let computerScore = 0

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase()
        computerChoice = computerChoice.toLowerCase()
    
        if (humanChoice === 'rock' && computerChoice === 'scissors') {
            humanScore++
            console.log(`Your choice: ${humanChoice}. vs Computer choice: ${computerChoice}.`)
            console.log("You win! Rock beats scissors.")
        }
        else if (humanChoice === 'paper' && computerChoice === 'rock') {
            humanScore++
            console.log(`Your choice: ${humanChoice}. vs Computer choice: ${computerChoice}.`)
            console.log("You win! Paper beats rock.")
        }
        else if (humanChoice === 'scissors' && computerChoice === 'paper') {
            humanScore++
            console.log(`Your choice: ${humanChoice}. vs Computer choice: ${computerChoice}.`)
            console.log("You win! Scissors beats paper.")
        }
        else if (humanChoice === computerChoice) {
            console.log(`Your choice: ${humanChoice}. vs Computer choice: ${computerChoice}.`)
            console.log("It's a tie! No points awarded.")
        }
        else {
            computerScore++
            console.log(`Your choice: ${humanChoice}. vs Computer choice: ${computerChoice}.`)
            console.log(`You lose! ${computerChoice} beats ${humanChoice}.`)
        }
    }

    for (i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection)
        console.log(`${humanScore} - ${computerScore}`)
    }

    if (humanScore > computerScore) {
        console.log("You win! You beat the computer.")
    }
    else if (humanScore < computerScore) {
        console.log("You lost. The computer beat you.")
    }
    else if (humanScore === computerScore) {
        console.log("Tie game. Play again to have a winner!")
    }
    else {
        console.log("Error. There is no winner or tie. Make sure you entered rock, paper, or scissors. Or play again.")
    }
}

playGame()