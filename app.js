// const max = prompt("enter the max number");
// const random = Math.floor(Math.random() * max) + 1;

// let guess = prompt("guess the number");
// while(true) {
//     if(guess == "quit"){
//         console.log("user quit");
//         break;
//     }

//     if (guess == random) {
//         console.log("you are right! congrats", random);
//         break;
//     }else if(guess < random) {
//         guess = prompt("hint : your guess was too small. please try again");
//     }else {
//         guess = prompt("hint : your guess was too large, please try again");
//     }
// }

function startGame() {
  // grab the <p id="result"> once
  const output = document.getElementById("result");
  output.textContent = "";            // clear any earlier text

  const max = prompt("Enter the max number");
  const random = Math.floor(Math.random() * max) + 1;

  let guess = prompt("Guess the number");
  while (true) {
    if (guess === "quit") {
      output.textContent = "You quit the game.";
      break;
    }

    // convert prompt string to number for reliable comparisons
    const numGuess = Number(guess);

    if (numGuess === random) {
      output.textContent = `🎉 Correct! The number was ${random}.`;
      break;
    } else if (numGuess < random) {
      guess = prompt("Hint: your guess was too small. Try again");
    } else {
      guess = prompt("Hint: your guess was too large. Try again");
    }
  }
}

// kick things off when the button is pressed
document.getElementById("startBtn").addEventListener("click", startGame);
