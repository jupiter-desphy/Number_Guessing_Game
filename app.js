
let min = 1;
let max = 100;
let rand = Math.floor(Math.random() * max) +1;
let isPlaying = true

while (isPlaying) {
    turn()
}
    function turn() {
    let input = Number.parseInt(prompt(`What is my favorite number between ${min} and ${max}?`)); 
    if (input < rand) {
        alert ("Too low. Try again.");
        } else if (input > rand) {
        alert ("Too high. Try again.");
        } else if (input == rand) {
        alert ("Congratulations!!!");
        isPlaying = false;
        }  else {
        alert (`Please enter a valid number between ${min} and ${max}.`);
        
    }
}
