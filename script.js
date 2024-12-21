let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara= document.querySelector("#comp-score");


const genCompChoice = () =>{
    const options = ["rock","paper","scissors"];
     const  randIdx = Math.floor(Math.random()*3);
     return options[randIdx];
};
const drawGame = () =>{
    // console.log("Game was draw.");
    msg.innerText = "Game was draw. play again";
    msg.style.backgroundColor = "#081b31"
};
const showWinner = (userWin, userChoice, CompChoice) =>{
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        // console.log("you win!");
        msg.innerText = `you win! your ${userChoice} beats ${CompChoice}`;
        msg.style.backgroundColor = "green"
    }else{
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `you lose. ${CompChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red"
    }
}

const playGame = (userChoice) =>{
    // console.log("user choice = ", userChoice);
    // generate computer choice //
    const CompChoice = genCompChoice();
    // console.log("comp choice = ",CompChoice);

    if(userChoice === CompChoice){
        drawGame();

    }else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = CompChoice === "paoer"? false: true;

        }else if(userChoice === "paper"){
           userWin = CompChoice === "scissors"? false : true;
        }else{
            userWin =  CompChoice === "rock" ? false :true;
        }
        showWinner(userWin,userChoice,compScore);
    }
};

choices.forEach((choice) =>{
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked",userChoice);
        playGame(userChoice);

    });

});