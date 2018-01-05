let numSquares = 6;
let colors = generateRandomColors(numSquares);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let colorDisplay = document.querySelector("#colorDisplay");
let messageDisplay = document.querySelector("#message");
let h1 = document.querySelector("h1");
let resetButton = document.querySelector("#reset");
let eastBtn = document.querySelector("#easyBtn");
let hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(let i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.background = colors[i];
			} else {
				squares[i].style.background = "none";
			}
		}
});

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(let i = 0; i < squares.length; i++){
			squares[i].style.background = colors[i];
			squares.style.background = "block";
		}
});

resetButton.addEventListener("click", function(){
	//generate all new color
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change color display to match picked color
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for(let i = 0; i < squares.length; i++){
	squares[i].style.background = colors[i];
	}
	h1.style.background = "#232323"
})

colorDisplay.textContent = pickedColor;

for(let i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.background = colors[i];
	
	// add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color of clicked square
		let clickedColor = this.style.background;
		//compare color to pickedcolor
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!!";
			resetButton.textContent = "Play Again?";
			changeColors(clickedColor);
			h1.style.background = clickedColor;
			} else {
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again";
			}
		});
	}

	function changeColors(color){
		//loop through all squares 
		for(let i = 0; i < squares.length; i++){
			//change each color to match given color 
			squares[i].style.background = color;
		} 
	}

	function pickColor(){
		let random = Math.floor(Math.random() * colors.length);
			return colors[random];
	}

	function generateRandomColors(num){
		//Make An Array
		let arr = []
		// Add num random colors to array 
		for(let i = 0; i < num; i++){
			arr.push(randomColor())
			//get randome color and push into arr
		}
		//return array 
		return arr;
	}

	function randomColor(){
		//pick a "red" from 0 - 255
	let r = Math.floor(Math.random() * 256)
		//pick a "green" from 0 - 255
	let g = Math.floor(Math.random() * 256)
		//pick a "blue" from 0 - 255
	let b = Math.floor(Math.random() * 256)
	return "rgb(" + r + ", " + g + ", " + b + ")";
	}















