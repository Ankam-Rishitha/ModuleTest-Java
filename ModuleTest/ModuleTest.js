var userScore=0;
var computerScore=0;
userScore = parseInt(localStorage.getItem("userScore")) || 0;
computerScore = parseInt(localStorage.getItem("computerScore")) || 0;
userScore=localStorage.getItem('userScore');
function playGame(userChoice) {
    const choices = ['rock','paper','scissors'];
    const computerChoice = choices[Math.floor(Math.random()*choices.length)];
    if (userChoice===computerChoice) {
        window.location.href="tie.html";
    } else if ((userChoice === 'rock' && computerChoice === 'scissors')||(userChoice === 'paper' && computerChoice === 'rock')||(userChoice === 'scissors' && computerChoice === 'paper')) {
        userScore++;
        userScore.innerHTML = userScore;
        document.getElementById('userScore').textContent=userScore;
        window.location.href="userWin.html";
    } else {
        computerScore++;
        computerScore.innerHTML = computerScore;
        document.getElementById('computerScore').textContent=computerScore;
        window.location.href="computerWin.html";
    }
}
function goHome() {
    window.location.href = 'ModuleTest.html';
}
function goNext() {
    window.location.href= 'Hurray.html';
}