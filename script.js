document.getElementById("revealMessageButton").addEventListener("click", function() {
    const message = document.getElementById("personalMessage");
    if (message.classList.contains("hidden")) {
        message.classList.remove("hidden");
        message.style.opacity = 1;
        message.style.height = "auto";
    } else {
        message.classList.add("hidden");
        message.style.opacity = 0;
        message.style.height = 0;
    }
});

let score = 0;
const gameArea = document.getElementById("gameArea");
const scoreBoard = document.getElementById("scoreBoard");
const startGameButton = document.getElementById("startGameButton");

function createFallingBalloon() {
    const balloon = document.createElement("div");
    balloon.classList.add("falling-balloon");
    balloon.style.left = Math.random() * (gameArea.clientWidth - 40) + "px";
    balloon.style.backgroundColor = randomColor();
    
    balloon.addEventListener("click", function() {
        score++;
        scoreBoard.textContent = "Score: " + score;
        balloon.remove();
    });
    
    gameArea.appendChild(balloon);
    
    setTimeout(() => {
        if (balloon.parentElement === gameArea) {
            balloon.remove();
        }
    }, 4000);
}

function startGame() {
    score = 0;
    scoreBoard.textContent = "Score: " + score;
    
    const gameInterval = setInterval(createFallingBalloon, 1000);
    
    setTimeout(() => {
        clearInterval(gameInterval);
        alert("Game Over! Your score: " + score);
    }, 30000);
}

startGameButton.addEventListener("click", startGame);

function randomColor() {
    const colors = ["#ff7f50", "#87cefa", "#32cd32", "#ffa500", "#ee82ee"];
    return colors[Math.floor(Math.random() * colors.length)];
}
