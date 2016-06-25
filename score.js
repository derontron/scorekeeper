var playerOneButton = document.getElementById("p1");
var playerTwoButton = document.querySelector("#p2");
var resetButton = document.getElementById("reset");
var p1_display = document.querySelector("#p1_display");
var p2_display = document.querySelector("#p2_display");
// var numInput = document.getElementsByTagName("input");
// Since it's the only input, "input" would work just fine here.
var numInput = document.querySelector("input[type='number']");
var p = document.querySelector("p span");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

console.log(numInput);

playerOneButton.addEventListener("click", function() {
	if (!gameOver) {
		p1Score++;
		console.log(p1Score, winningScore)
		if (p1Score === winningScore) {
			p1_display.classList.add("winner");
			gameOver = true;
		}
		p1_display.innerHTML = p1Score;		
	}

});


playerTwoButton.addEventListener("click", function() {
	if (!gameOver) {
		p2Score++;
		if(p2Score === winningScore) {
			p2_display.classList.add("winner");
			gameOver = true;
		}
		p2_display.innerHTML = p2Score;
	}
});


resetButton.addEventListener("click", function() {
	// Re initialize everything to 0
	// needed to use text content here to break the gameover "lock"
	reset();
});

function reset() {
	p1Score = 0;
	p2Score = 0;
	p1_display.textContent = 0;
	p2_display.textContent = 0;
	// Remove the winner class
	p1_display.classList.remove("winner");
	p2_display.classList.remove("winner");
	gameOver = false;
}

numInput.addEventListener("change", function() {
	p.textContent = this.value;
	winningScore = Number(this.value);
	reset();
});








