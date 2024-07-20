let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorepara = document.querySelector("#user-score");
const compScorepara = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random()*3)];
}

function playSound() {
    var audio = new Audio("wrong.mp3");
       audio.play();
   }

const drawGame = () => {
    playSound();
    msg.innerText = "Draw!!!  Play Again.";
    msg.style.backgroundColor = "black";
}

const showWinner = (userwin, userChoice, compChoice) => {
    if(userwin){
        userScore++;
        userScorepara.innerText = userScore;
        var audio1 = new Audio("youwin.mp3");
        audio1.play();
        msg.innerText = `You Win. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorepara.innerText = compScore;
        var audio2 = new Audio("compwin.mp3");
        audio2.play();
        msg.innerText = `You Lose. ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) => {
    //Generate comp choice
    const compChoice = genCompChoice();
    console.log("Comp-choice = ", compChoice);

    if(compChoice === userChoice){
        drawGame();
    }
    else{
        let userwin = true;
        if(userChoice === "rock"){
            userwin = compChoice === "paper" ? false : true;
        }
        else if(userChoice === "paper"){
            userwin = compChoice === "scissors" ? false : true;
        }
        else{
            userwin = compChoice === "rock" ? false : true;
        }
        showWinner(userwin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});


