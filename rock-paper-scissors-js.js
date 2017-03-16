//rock-paper-scissors js game

var userChoice = prompt('Please choose between a-rock b-paper c-scissors');

var result;

computerChoice = Math.random();
console.log = computerChoice;
if (0 < computerChoice < 0.33) {
    computerChoice = "rock";
}
else if (0.34 < computerChoice < 0.66) {
    computerChoice = "paper";
}
else {
    computerChoice = "scissors";
}

var compare = function(choice1, choice2) {
    if (userChoice === computerChoice) {
         result = "its a tie!";
    }
    else if (choice1 === "rock") {
        if (choice2 === "scissors") {
            result = "rock wins!";
        }
        else {
            result = "paper wins!";
        }
    }
    else if (choice1 === "paper") {
        if (choice2 === "rock") {
            result = "paper wins!";
        }
        else {
            result = "scissors wins!";
        }
    }
    else if ( choice1 === "scissors") {
        if (choice2 === "paper") {
            result = "scissors wins!";
        }
        else {
            result = "rock wins!";
        }
    }
};

compare(userChoice, computerChoice);