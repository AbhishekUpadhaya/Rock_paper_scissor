let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let msgDis = document.querySelector("#msg");
let Uscore = document.querySelector("#user-score");
let Cscore = document.querySelector("#comp-score");

const genComputerChoice = () => {
    //rock paper scissor
    let options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * options.length);
    return options[randIdx];
}

const drawGame = () => { 
    msgDis.style.backgroundColor="black";
    msgDis.innerHTML = "Oops match draw! Play again";
}

const showWinner = (userWin,userChoice,compChoice) => {
    if (userWin) {
        msgDis.innerHTML = `you win ! ${userChoice} beats ${compChoice}`;
        msgDis.style.backgroundColor="green";
        userScore++;
        let val=`${userScore}`;
        console.log(val);
        Uscore.innerHTML=val;

    }
    else {
        msgDis.innerHTML = `you loss , ${compChoice} beats ${userChoice}`;
        msgDis.style.backgroundColor="red";
        compScore++;
        let val=`${compScore}`;
        console.log(val);
        Cscore.innerHTML=val;
    }
}
const playGame = (userChoice) => {

    let compChoice = genComputerChoice();
    if (userChoice === compChoice) {
        drawGame();//draw game
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            //computer choice be paper or scissor
            userWin = compChoice === "paper" ? false : true;

        }
        else if (userChoice == "paper") {
            //computer choice be rock or scissor
            userWin = compChoice === "scissor" ? false : true;
        }
        else {
            //computer choice be paper or rock
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        let userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
})







