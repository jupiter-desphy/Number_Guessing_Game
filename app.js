window.onload = function () {
    console.log("Welcome!");

// let min = 1;
// let max = 100;
// let rand = Math.floor(Math.random() * max) +1;
let isPlaying = false;
let history = []
let input = document.getElementById("input");
const startBtn = document.querySelector("#start");
let stopBtn = document.getElementById("reset");
let feedback = document.getElementById("feedback")

let seconds = 0;
let minutes = 0;
let hours = 0;
let randomNumber
const time = document.getElementById("time");

//
startBtn.addEventListener("click", startGame);
stopBtn.addEventListener("click", guess);

function startGame() {
    //set a random number to guess from
    randomNumber = Math.floor(Math.random() * 100) + 1;
    //game on!!
    isPlaying = true;
    //switching the button to read guess instead of start
    startBtn.textContent = "Guess";
    //player can now enter an input
    input.disabled = false;
    input.value = "";

    startBtn.removeEventListener("click", startGame);
    startBtn.addEventListener("click", guess)

    //stopwatch set to 1 second intervals
    const duration = setInterval(timer, 1000);

    function timer() {
        if (isPlaying) {
            seconds++
        if (seconds == 60) {
            seconds = 0;
            minutes++;
        if (minutes == 60) {
            seconds = 0;
            minutes = 0;
            hours++;
        } else if (hours > 24 || !isPlaying) {
            clearInterval (duration);
        }
    }}
        
        currentTime = `${hours
            .toString()
            .padStart(2,"0")}:
            ${minutes
            .toString()
            .padStart(2,"0")}:
            ${seconds
            .toString()
            .padStart(2,"0")}`;
        time.textContent = currentTime;
    }
}

    function guess() {
        if (isPlaying) {
            giveFeedback(input.value);
        }
    }

    function giveFeedback(guess) {
        if (checkInput(parseInt(guess))) {
            if (history.includes(guess)) {
                feedbackP.innerHTML = `You already guessed that`
            }
        }
    }

    function checkInput(guess) {
        if (guess < randomNumber) {
            feedback.textContent = "Too low. Try again."
            } else if (guess > randomNumber) {
            feedback.textContent = "Too high. Try again."
            } else if (guess == randomNumber) {
            feedback.textContent =  "Congratulations!!!"
            isPlaying = false;
            }  else {
            feedback.textContent =  `Please enter a valid number between 1 and 100.`;
    }
            // while (isPlaying) {
                //     turn()
                // }
                //     function turn() {
                //     let input = Number.parseInt(prompt(`What is my favorite number between ${min} and ${max}?`)); 
                    
                        
                //     }
                // }
        

    }
};