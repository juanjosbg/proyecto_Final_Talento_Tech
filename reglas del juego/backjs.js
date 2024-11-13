


const startGameButton = document.getElementById('start-game-button');
const welcomeContainer = document.getElementById('welcome-container');
const instructionsContainer = document.getElementById('instructions-container');
const closeInstructionsButton = document.getElementById('close-instructions-button');
const startGameFromInstructionsButton = document.getElementById('start-game-from-instructions');


function showInstructions() {
  welcomeContainer.style.display = 'none';
  instructionsContainer.style.display = 'block'; 
}


function startGame() {
  instructionsContainer.style.display = 'none';  
  gameContainer.style.display = 'block'; 
  console.log("¡El juego ha comenzado!");
  
}


function closeInstructions() {
  instructionsContainer.style.display = 'none'; 
  welcomeContainer.style.display = 'block'; 
}


startGameButton.addEventListener('click', showInstructions);
startGameFromInstructionsButton.addEventListener('click', startGame);
closeInstructionsButton.addEventListener('click', closeInstructions);





