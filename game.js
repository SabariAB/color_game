var numSquares = 6;
var colors = generateRandomColors(numSquares);
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var msgDisplay = document.querySelector("#msg");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");


easyBtn.addEventListener("click", function(){
 	easyBtn.classList.add("selected")
 	hardBtn.classList.remove("selected")
 	numSquares = 3;
 	colors = generateRandomColors(numSquares);
 	pickedColor = pickColor();
 	colorDisplay.textContent = pickedColor;
 	for(var i = 0; i < squares.length; i++){
 		if(colors[i]){
 			squares[i].style.background = colors[i];
 		}else{
 			squares[i].style.display = "none";
 		}
 	}
 	h1.style.background = "steelblue";
});

hardBtn.addEventListener("click", function(){
 	hardBtn.classList.add("selected")
 	easyBtn.classList.remove("selected")
 	numSquares = 6;
 	colors = generateRandomColors(numSquares);
 	pickedColor = pickColor();
 	colorDisplay.textContent = pickedColor;
 	for(var i = 0; i < squares.length; i++){
 			squares[i].style.background = colors[i];
 			squares[i].style.display = "block"; 		
 	}
 	h1.style.background = "steelblue";
});

resetButton.addEventListener("click", function(){
	// generate all new colors
	colors = generateRandomColors(numSquares);
	// pick a new random color from array
	pickedColor = pickColor();
	// change colorDisplay to match picked color
	this.textContent = "New Colors";
	colorDisplay.textContent = pickedColor;
	msgDisplay.textContent = "";
	// change colors of squares
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = colors[i]; 
	}
	h1.style.background = "steelblue";
});



colorDisplay.textContent = pickedColor;


	for(var i = 0; i < squares.length; i++){
		// add initial colors to squares
		squares[i].style.background = colors[i];
		// add click listeners to squares
		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.background;
			if(clickedColor === pickedColor){
			    msgDisplay.textContent = "Correct!";
			    resetButton.textContent = "Play Again?";
				changeColors(clickedColor);
				h1.style.background = clickedColor;
				
			} else {
				this.style.background = "#232323";	
				msgDisplay.textContent = "Try Again!";
			}
		});
	}
// changing colors of all squares like picked color
function changeColors(color){
	for( var i = 0; i < squares.length; i++){
		squares[i].style.background = color;
	}
}
// select random color
function  pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	// make an array
	var arr = []
	// repeat num times
	for(var i = 0; i < num; i++){
		arr.push(randomColor())
	}
	// return array
	return arr;
}

function randomColor(){
	// pick a red from 0  - 255
	var r = Math.floor(Math.random() * 256);
	// pick a green from 0  - 255
	var g = Math.floor(Math.random() * 256);
	// pick a blue from 0  - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}