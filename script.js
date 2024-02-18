let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");

const userScoreCount = document.querySelector("#user-score");
const compScoreCount = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["Rock", "Paper", "Scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return  options[randomIdx];
}

const drawGame = () => {
    // console.log("Game's a DRAW");
    msg.innerText = "Game's a Draw. GO AGAIN!!!";
    msg.style.backgroundColor = "#081b31";

}

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        // console.log("You Won!");
        userscore++;
        userScoreCount.innerText = userscore;
        msg.innerText = `You Won! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        // console.log("You Lost!");
        compscore++;
        compScoreCount.innerText = compscore;
        msg.innerText = `You Lost! ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playgame = (userChoice) => {
    console.log("User Choice =", userChoice);
    // Generate COmputer Choice
    const compChoice = genCompChoice();
    console.log("Computer Choice =", compChoice);

    if(userChoice === compChoice) {
        // Game Draw
        drawGame();
    }else {
        let userWin = true;
        if (userChoice === "Rock") {
            // paper, scissors
            userWin = compChoice === "Paper" ? false : true;
        } else if (userChoice === "Paper") {
            // Rock, scissors
            userWin = compChoice === "Scissors" ? false : true;
        } else {
            // paper, Rock
            userWin = compChoice === "Rock" ? false : true ;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    })
})