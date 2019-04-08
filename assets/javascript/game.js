// Reset Function
// Function that gets word from array
// function on key event
// function comparing your guesses to right word
// function reset
// index is location
// push is adding to an array

var wins = 0;
    losses = 0;
    numGuesses=9;
    wordBank = ["ironman", "blackpanther", "captainamerica", "thanos", "infinitystone", "thor", "spiderman"];
    chosenWord="";
    lettersInChosenWord=[];
var numberOfBlanks;
    blanksAndSuccesses=[];
    wrongGuesses=[];


function startGame(){
    numGuesses=9
    chosenWord=wordBank[Math.floor(Math.random()*wordBank.length)];
    lettersInChosenWord=chosenWord.split("");
    numberOfBlanks=lettersInChosenWord.length;
    console.log(chosenWord);
    blanksAndSuccesses=[];
    wrongGuesses=[];
    for(var i=0; i<numberOfBlanks;i++){
        blanksAndSuccesses.push("_")
    }
    console.log(blanksAndSuccesses)
}

function checkLetters (letter) {
    var letterInWord=false
    for(var i=0; i<numberOfBlanks;i++){
        if (chosenWord[i]===letter){
            letterInWord=true
        }
    }
    if(letterInWord) {
        for (var j=0; j<numberOfBlanks;j++){
            if(chosenWord[j]===letter){
                blanksAndSuccesses[j]=letter;
            }
        }
        console.log(blanksAndSuccesses)
    }
    else{
        wrongGuesses.push(letter);
        numGuesses--;
    
    }
    console.log(numGuesses)
    document.getElementById("guesses-left").innerHTML = numGuesses;
    document.getElementById("current-word").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("guesses-list").innerHTML = wrongGuesses.join(" ");
}

function roundCompleted(){
    console.log("wins"+wins)
    console.log("losses"+losses)
    console.log("number of guesses"+numGuesses)
    document.getElementById("guesses-left").textContent = numGuesses;
    document.getElementById("current-word").innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById("guesses-list").innerHTML = wrongGuesses.join(" ");
    if (lettersInChosenWord.toString() === blanksAndSuccesses.toString()) {
        wins++;
        alert("You win!");
        document.getElementById("wins-text").innerHTML = wins;
        startGame();
        numGuesses=9
  }
  else if (numGuesses === 0) {
    losses++;
    alert("You lose");
    document.getElementById("losses-text").innerHTML = losses;
    startGame()
    numGuesses = 9;
  }
}
startGame()
document.onkeyup = function(event) {
    
    if (event.keyCode >= 65 && event.keyCode <= 90) {
      var letterGuessed = event.key.toLowerCase();
      checkLetters(letterGuessed);
      roundCompleted();
    }
  }