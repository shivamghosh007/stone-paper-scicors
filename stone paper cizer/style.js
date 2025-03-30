let usescore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const usescorepara = document.querySelector("#user-score");
const compscorepara = document.querySelector("#comp-score");
const gencompchoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randidx = Math.floor(Math.random() * 3);
    return options[randidx];
};
const drawgame = () => {
    console.log("game is draw");
    msg.innerText = "GAME DRAW!";
    msg.style.backgroundColor = "sky";
};
const showWinner = (userwin, userchoice, compchoice) => {
    if (userwin) {
        usescore++;
        usescorepara.innerText = usescore;
        console.log("you win!");
        msg.innerText = `you WIN! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compscore++;
        compscorepara.innerText = compscore;
        console.log(msg)
        console.log("you lose");
        msg.innerHTML = `you LOSE! ${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
}


const playgame = (userchoice) => {
    console.log("user choice =", userchoice);
    const compchoice = gencompchoice();
    console.log("comp choice =", compchoice);

    if (userchoice === compchoice) {
        drawgame();
    } else {
        let userwin = true;
        if (userchoice == "rock") {
            userwin = compchoice === "paper" ? false : true;
        } else if (userchoice === "paper") {
            compchoice === "scissors" ? false : true;
        } else {
            userwin = compchoice === "rock" ? false : true;
        }
        showWinner(userwin, userchoice, compchoice);
    }

};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("Id");
        playgame(userchoice);

    });
});
