function startGame() {
  // Get the numbers entered by the users
  const user1 = parseInt(document.getElementById('user1Number').value);
  const user2 = parseInt(document.getElementById('user2Number').value);

  if (isNaN(user1) || isNaN(user2)) {
      alert("Please enter both numbers!");
      return;
  }

  // Generate a random number between 1 and 100
  const randomNumber = Math.floor(Math.random() * 100) + 1;

  // Calculate the difference between each user's guess and the random number
  const diffUser1 = Math.abs(user1 - randomNumber);
  const diffUser2 = Math.abs(user2 - randomNumber);

  // Determine the winner
  let winner = '';
  if (diffUser1 < diffUser2) {
      winner = 'Player 1 wins!';
  } else if (diffUser2 < diffUser1) {
      winner = 'Player 2 wins!';
  } else {
      winner = 'It\'s a tie!';
  }

  // Display the result
  document.getElementById('result').innerHTML = `Random Number: ${randomNumber}<br>${winner}`;
  document.getElementById('newGameBtn').style.display = 'block';
}

function newGame() {
  // Clear previous input and result
  document.getElementById('user1Number').value = '';
  document.getElementById('user2Number').value = '';
  document.getElementById('result').innerHTML = '';
  document.getElementById('newGameBtn').style.display = 'none';
}
