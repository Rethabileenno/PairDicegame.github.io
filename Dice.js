// Initialize player scores
let player1Score = 0;
let player2Score = 0;

// Add event listener to roll button
document.getElementById('rollButton').addEventListener('click', function() {
    // Get player names from input fields, default to 'Player 1' and 'Player 2'
    let player1 = document.getElementById('player1').value || 'Player 1';
    let player2 = document.getElementById('player2').value || 'Player 2';
    // Start the dice game
    diceGame([player1, player2]);
});

// Add event listener to new game button
document.getElementById('newGameButton').addEventListener('click', function() {
    // Reset player names and results
    document.getElementById('player1').value = '';
    document.getElementById('player2').value = '';
    document.getElementById('results').innerHTML = '';
    // Reset player scores
    player1Score = 0;
    player2Score = 0;
    // Update score display
    document.getElementById('player1Score').innerText = 'Player 1: 0';
    document.getElementById('player2Score').innerText = 'Player 2: 0';
});

// Function to roll a dice
function rollDice() {
    // Return a random number between 1 and 6
    return Math.floor(Math.random() * 6) + 1;
}

// Function to play the dice game
function diceGame(players) {
    // Initialize highest roll and winner
    let highestRoll = 0;
    let winner = '';
    // Get results div
    let resultsDiv = document.getElementById('results');
    // Clear previous results
    resultsDiv.innerHTML = '';

    // Array of dice emojis
    const diceEmoji = ["", "⚀", "⚁", "⚂", "⚃", "⚄", "⚅"];

    // Loop over players
    for(let i = 0; i < players.length; i++) {
        // Roll the dice
        let roll = rollDice();
        // Display the roll result
        resultsDiv.innerHTML += `${players[i]} rolled <span class="dice">${diceEmoji[roll]}</span><br>`;

        // If the roll is higher than the current highest roll, update highest roll and winner
        if(roll > highestRoll) {
            highestRoll = roll;
            winner = players[i];
        }

        // Update player scores and display
        if(i === 0) {
            player1Score += roll;
            document.getElementById('player1Score').innerText = `${players[i]}: ${player1Score}`;
        } else {
            player2Score += roll;
            document.getElementById('player2Score').innerText = `${players[i]}: ${player2Score}`;
        }
    }




    
    // Display the winner
    resultsDiv.innerHTML += `${winner} wins with a roll of <span class="dice">${diceEmoji[highestRoll]}</span>!`;
}

// Function to reset the game
function resetGame() {
    // Clear player names
    document.getElementById('player1').value = '';
    document.getElementById('player2').value = '';
    // Reset player scores
    player1Score = 0;
    player2Score = 0;
    // Update score display
    document.getElementById('player1Score').innerText = 'Player 1: 0';
    document.getElementById('player2Score').innerText = 'Player 2: 0';
}