let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let scoreU = document.querySelector("#user-score");
let scoreC = document.querySelector("#comp-score");
let result = document.querySelector(".result");


choices.forEach((choice)=>{
    choice.addEventListener("click", ()=>{
        let userChoice = choice.getAttribute("id");
        gamePlay(userChoice);
    })
})

const gamePlay = (userChoice)=>{
    let randomNumber = Math.floor(Math.random()*3);
    let compChoice = choices[randomNumber].getAttribute("id");
    let userWin = true;
    if(userChoice == "rock")
    {
        switch (compChoice) {
            case "rock":
                draw();
                break;
            case "paper":
                userWin = false;
                showWinner(userWin, userChoice, compChoice);
                break;
            case "scissor":
                userWin = true;
                showWinner(userWin, userChoice, compChoice);
        }
    }
    else if(userChoice == "paper")
    {
        switch (compChoice) {
            case "rock":
                userWin = true;
                showWinner(userWin, userChoice, compChoice);
                break;
            case "paper":
                draw();
                break;
            case "scissor":
                userWin = false;
                showWinner(userWin, userChoice, compChoice);
        }
    }
    // if(userChoice == "scissor")
    else
    {
        switch (compChoice) {
            case "rock":
                userWin = false;
                showWinner(userWin, userChoice, compChoice);
                break;
            case "paper":
                userWin = true;
                showWinner(userWin, userChoice, compChoice);
                break;
            case "scissor":
                draw();
        }
    }
}

const draw = ()=>{
    result.innerText = "Match was Draw. Play Again!";
    result.style.background = "#191913"; 
}

const showWinner = (userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        result.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        scoreU.innerText = userScore;
        result.style.backgroundColor = "green";
    }
    else{
        compScore++;
        result.innerText = `You lost. ${compChoice} beats Your ${userChoice}`;
        scoreC.innerText = compScore;
        result.style.backgroundColor = "red";
    }
}
