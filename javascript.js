function getComputerChoice(){
    number = getRandomIntInclusive()
    if (number === 3) {
        return  "ROCK";
    } else if (number === 2){ 
        return "SCISSORS";
    } else {
        return "PAPER";
    } 
}; 
function getRandomIntInclusive() {
    min = Math.ceil(1);
    max = Math.floor(3);
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function getPlayerSelection(e) {
    return e.target.textContent;
       /* do {
    choice = prompt("Choose one: rock, paper, or scissors:");
        choice = choice.toUpperCase();
    } while (choice != "ROCK" && choice != "PAPER" && choice != "SCISSORS");
    return choice; */
}; 

function playRound(e) {
    const playerSelection = e.target.textContent;
    const computerSelection = getComputerChoice();
    console.log (`Player chose ${playerSelection}.`);
    results.textContent = `Player chose ${playerSelection}.`;
    console.log (`Computer chose ${computerSelection}.`);
    let result =''
    if (playerSelection === computerSelection){
        result = "It's a tie!";
    } else if (playerSelection === "SCISSORS") {
        if (computerSelection === "ROCK") {
            result= "Computer wins!";
        }else { 
            result = "Player wins!";
        }
    } else if (playerSelection === "PAPER") {
        if (computerSelection === "ROCK") {
            result =  "Player wins!";
        }else { 
            result = "Computer wins!";
        }
    } else {
        if (computerSelection === "SCISSORS") {
            result= "Player wins!";
        }else { 
            result = "Computer wins!";
        }
    };console.log(result);
};

function game() {
    let round = 1;
    let computerScore = 0;
    let playerScore = 0;
    while (round < 6){
        console.log(`Round: ${round}`);
       updateScore();
        round ++;
    };
    return declareWinner(computerScore, playerScore)
};

function declareWinner (a,b) {
    if (a > b){
        return `Computer wins ${a} to ${b}.`;
    } else if (b>a) {
        return `Player wins ${b} to ${a}.`;
    } else {
        return `It's a tie! ${b} to ${a}`;
    }
};

function updateScore(){
    winner = playRound();
        if (winner === "Player wins!"){
            playerScore ++;
        } else if (winner === "Computer wins!") {
            computerScore ++;
        };
        console.log(winner)
        console.log(`Player's score: ${playerScore}`);
        console.log(`Computer's score ${computerScore}`);
}


window.addEventListener('click', playRound);


