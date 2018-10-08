var numSquares = 6; 
var colors = [];  
var pickedColor;
var squares = document.querySelectorAll(".square");   
var colorDisplay = document.getElementById("rgbColor"); 
var messageDisplay = document.getElementById("msg"); 
var h1 = document.querySelector("h1"); 
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode"); 

init(); 

function init(){
	//button for easy and hard mode
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected"); 
		modeButtons[1].classList.remove("selected"); 
		this.classList.add("selected"); 
		this.textContent === "Easy" ? numSquares = 3: numSquares = 6; 
		reset(); 
		}); 
	}

	for(var i = 0; i < squares.length; i++){
		//add click listeners to each square
		squares[i].addEventListener("click", function(){	
			//grabs the color of the clicked square
			var clickedColor = this.style.backgroundColor; 
			if(pickedColor === clickedColor){ 
				h1.style.backgroundColor = clickedColor; 
				messageDisplay.textContent = "Correct!"
				changeColor(clickedColor); 
				resetButton.textContent = "Play Again?"
			}
			else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try Again..."  
			}
		});
	}

	reset(); 
}

for(var i = 0; i < modeButtons.length; i++){
	modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected"); 
		modeButtons[1].classList.remove("selected"); 
		this.classList.add("selected"); 
		this.textContent === "Easy" ? numSquares = 3: numSquares = 6; 
		reset(); 
	}); 
}

resetButton.addEventListener("click", function(){
	reset(); 
});

function reset(){
	colors = arrayOfColors(numSquares); 
	pickedColor = pickColor(); 
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New Colors"; 
	messageDisplay.textContent = ""; 
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block"; 
			squares[i].style.background = colors[i]; 
		} else {
			squares[i].style.display = "none"; 
		}
	}

}

function changeColor(color){
	//loop through all squares
	//change each color to match pickedColor
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color; 
	}
}

function randomColor(){
	var r = Math.floor(Math.random() * 256); 
	var g = Math.floor(Math.random() * 256); 
	var b = Math.floor(Math.random() * 256);
	return "rgb("+r+", "+g+", "+b+")"; 
}

function pickColor(){
	var random = Math.floor(Math.random()*colors.length); 
	return colors[random]; 
}

function arrayOfColors(size){
	var arr = []; 
	for(var i = 0; i < size; i++){
		arr[i] = randomColor(); 
	}
	return arr; 
}