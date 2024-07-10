function getComputerChoice() {
    options = [ 'rock', 'paper', 'scissors' ];
    return options[Math.floor(Math.random() * 3)];
}

function getPlayerChoice() {
    let choice = window.prompt("What's your choice?:");
    if (choice === null) {
        return getPlayerChoice();
    }
    choice = choice.trim().toLowerCase();
    if (choice !== "rock" && choice !== "paper" && choice !== "scissors") {
        return getPlayerChoice();
    }
    

    return choice;
}

function playRound(player, computer) {
    if (player === computer) {
        return "tie";
    }
    if (player === "rock") {
        if (computer === "paper") {
            return "computer";
        } else {
            return "player";
        }
    }
    if (player === "paper") {
        if (computer === "scissors") {
            return "computer";
        } else {
            return "player";
        }
    }
    if (player === "scissors") {
        if (computer === "rock") {
            return "computer";
        } else {
            return "player";
        }
    }
}

function playGame() {
    var humanScore = 0;
    var computerScore = 0;
    
    for (i=0; i<5; i++) {
        let player = getPlayerChoice();
        let computer = getComputerChoice();
        console.log(`player: ${player} vs computer: ${computer}`);

        const round = playRound(player, computer);
        if (round === "player") {
            humanScore++;
            console.log("player wins 1 point");
        } else if (round === "computer") {
            computerScore++;
            console.log("computer wins");
        }
        console.log("player vs computer score: " + humanScore + " : " + computerScore);
    }

    if (humanScore > computerScore) {
        console.log("player wins");
    } else if (computerScore > humanScore) {
        console.log("computer wins");
    } else {
        console.log("tie");
    }
}

playGame();

