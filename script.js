// Game variables
let player;
let gameContainer;
let playerPosition = {};
const moveSpeed = 7;

// Track which keys are currently pressed
const keysPressed = {
  ArrowUp: false,
  ArrowDown: false,
  ArrowLeft: false,
  ArrowRight: false,
  //   spacebar: false,
};
// Initialize the game
function initializeGame() {
  player = document.getElementById("chef");
  gameContainer = document.querySelector(".game-container");
  playerPosition = {
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
      keysPressed[event.code] = false;
    }
  });
}
// Update chef movement based on pressed keys
function updateMovement() {
  let deltaX = 0;
  let deltaY = 0;

  if (keysPressed.ArrowLeft) deltaX -= moveSpeed;
  if (keysPressed.ArrowDown) deltaY += moveSpeed;
  if (keysPressed.ArrowRight) deltaX += moveSpeed;
  if (keysPressed.ArrowUp) deltaY -= moveSpeed;

  playerPosition.x += deltaX;
  playerPosition.y += deltaY;

  constrainPlayerPosition();
  updatePlayerPosition();
}
// Keep chef within the game container boundaries
function constrainPlayerPosition() {
  const chefWidth = 40;
  const chefHeight = 40;
  const containerWidth = gameContainer.clientWidth;
  const containerHeight = gameContainer.clientHeight;

  if (playerPosition.x < 0) {
    playerPosition.x = 0;
  } else if (playerPosition.x > containerWidth - chefWidth) {
    playerPosition.x = containerWidth - chefWidth;
  }

  if (playerPosition.y < 0) {
    playerPosition.y = 0;
  } else if (playerPosition.y > containerHeight - chefHeight) {
    playerPosition.y = containerHeight - chefHeight;
  }
}
// Update the visual position of the chef
function updatePlayerPosition() {
  player.style.left = playerPosition.x + "px";
  player.style.top = playerPosition.y + "px";
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
