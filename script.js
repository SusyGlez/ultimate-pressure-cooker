// Game variables
let player;
let gameContainer;
let playerPositon = {};
const moveSpeed = 5;

// Track which keys are currently pressed
const keysPressed = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowLeft: false,
  ArrowRigth: false,
  //   spacebar: false,
};
// Initialize the game
function initializeGame() {
  player = document.getElementById("chef");
  gameContainer = document.querySelector(".game-container");
  playerPositon = {
    x: gameContainer.clientWidth / 2 - 20,
    y: gameContainer.clientHeight / 2 - 20,
  };

  updatePlayerPosition();
  setUpEventListeners();
  startGameLoop();
}
// Set up keyboard event listeners
function setUpEventListeners() {
  document.addEventListener("keydown", (event) => {
    if (event.code in keysPressed) {
      event.preventDefault();
      keysPressed[event.code] = true;
    }
  });
  document.addEventListener("keyup", (event) => {
    if (event.code in keysPressed) {
      event.preventDefault();
      keysPressed[event.code] = true;
    }
  });
}
// Update chef movement based on pressed keys
function updateMovement() {
  let deltaX = 0;
  let deltaY = 0;

  if (keysPressed.arrowLeft) deltaX -= moveSpeed;
  if (keysPressed.arrowDown) deltaY -= moveSpeed;
  if (keysPressed.arrowRigth) deltaX += moveSpeed;
  if (keysPressed.arrowUp) deltaY += moveSpeed;

  playerPositon.x += deltaX;
  playerPositon.y += deltaY;

  constrainPlayerPosition();
  updatePlayerPosition();
}
// Keep chef within the game container boundaries
function constrainPlayerPosition() {}
// Update the visual position of the chef
function updatePlayerPosition() {
  player.style.left = playerPositon.x + "px";
  player.style.top = playerPositon.y + "px";
  player.style.transform = "none";
}
// Start the game loop
function startGameLoop() {
  function gameLoop() {
    updateMovement();
    requestAnimationFrame(gameLoop);
  }
  requestAnimationFrame(gameLoop);
}
// Start the game when the page loads
document.addEventListener("DOMContentLoaded", () => {
  initializeGame();
});
// Restart game function
// Play/pause game function
// Mute/unmute funtion
// Reject food function
