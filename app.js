let rand = 7;

let min = 1;
let max = 10;
let favNumber = 7 
let input = prompt(`What is my favorite number between ${min} and ${max}?`);
input = parseFloat (input);

if (input < favNumber) {
  alert ("too low");
} else if (input > favNumber) {
  alert ("too high");
} else if (input == favNumber) {
  alert ("Congratulations!!!");
}  else {
  alert ("Please enter a valid number");
  
}
