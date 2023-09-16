const startEl = document.getElementById('start');
const stopEl = document.getElementById('stop');
const resetEl = document.getElementById('reset');
const timerEl = document.getElementById('timer');
let interval;
let timeLeft = 60;

function updatetimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;
    let formattedTime = `${minutes.toString().padStart(2, "0")} : ${seconds.toString().padStart(2, "0")}`;
    timerEl.innerHTML = formattedTime;
}

startEl.addEventListener("click", () => {
    interval = setInterval(() => {
        timeLeft--;
        updatetimer();
        if (timeLeft == 0) {
            alert("Time's up!");
            timeLeft = 1500;
        }
    }, 1000)
})

stopEl.addEventListener("click", () => {
    // console.log("stop");
    clearInterval(interval);
})

resetEl.addEventListener("click", () => {
    // console.log("reset");
    clearInterval(interval);
    timeLeft = 1500;
    updatetimer();
})