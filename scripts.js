// Initialize the chess game and chessboard
const board = Chessboard('chessboard');
const game = new Chess();

// Handle "Play with AI" button
document.getElementById('play-ai').addEventListener('click', function() {
    startGameAgainstAI();
});

// Handle "Play with Friends" button
document.getElementById('play-friends').addEventListener('click', function() {
    startMultiplayerGame();
});

// Function to start a game against AI
function startGameAgainstAI() {
    // Reset the game and chessboard
    game.reset();
    board.position(game.fen());
    
    // AI play is simulated by random moves
    aiMove();
}

// Function to make an AI move (basic random move AI)
function aiMove() {
    setTimeout(function() {
        const possibleMoves = game.legalMoves(); // Get all legal moves
        const move = possibleMoves[Math.floor(Math.random() * possibleMoves.length)]; // Random move
        game.ugly_move(move); // Make the move
        board.position(game.fen()); // Update the board
        aiMove(); // Continue AI moves
    }, 500);
}

// Placeholder function for multiplayer game setup
function startMultiplayerGame() {
    alert("Multiplayer mode is under development!");
}

// Helper function to reset the board and game
function resetGame() {
    game.reset();
    board.position(game.fen());
}
