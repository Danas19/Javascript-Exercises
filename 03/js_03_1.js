var guesses;
var randomNumber;

function reset() {
    guesses = 0;
    randomNumber = parseInt(Math.random() * 100);
}

reset();

console.log(randomNumber);

var button = document.querySelector("button");
console.log(button);
var input = document.querySelector("input");
console.log(input);

button.addEventListener("click", function() {
    ++guesses;
    
    var guessedNumber = input.value;
    console.log(guessedNumber);
    
    if (parseInt(guessedNumber) === randomNumber) {
        alert("You guessed right, you won the game! New random number was generated.");
        reset();
    } else if (parseInt(guessedNumber) < randomNumber) {
        alert("Random number is bigger");
    } else {
        alert("Random number is smaller");
    }
});