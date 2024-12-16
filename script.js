
function createGrid(n, padding) {
	for (i=0; i < (n * n) ; i++) {
		let grid = document.createElement("div");
		grid.className = "gridElement";
		grid.style.padding = padding;
		container.appendChild(grid);
	}
}



let color = "#292929";
let selectedChoice = "";
let imgOpacity = 10;
let container = document.querySelector("#container");
container.addEventListener("mouseover", (e) => {
	if (selectedChoice == "funky") {
		color = "rgb(" + Math.floor(Math.random() * 255) + ", " + 
					Math.floor(Math.random() * 255) + ", " + 
					Math.floor(Math.random() * 255)+ ")";
	} else if (selectedChoice == "opacity" && e.target.className ==
											"gridElement") {
		if (imgOpacity <= 100) {
			color = "rgb(41 41 41 / " + imgOpacity + "%)";
			imgOpacity+= 10;
		}
	}
	if (e.target.className == "gridElement") {
		e.target.style.background = color;
	}
});
let changeColor = document.querySelector("#optionContainer");
let btns = document.querySelectorAll("#optionContainer button");
optionContainer.addEventListener("click", (e) => {
	if (e.target.id == "erase") {
		color = "white";
		selectedChoice = "";
		btns.forEach((btn) => btn.style.background = "#a6dcff");
		e.target.style.setProperty("background", "#6e94ec",
								 	"important");
	} else if (e.target.id == "black") {
		color = "#292929";
		selectedChoice = "";
		btns.forEach((btn) => btn.style.background = "#a6dcff");
		e.target.style.setProperty("background", "#6e94ec",
								 	"important");
	} else if (e.target.id == "opacity") {
		selectedChoice = "opacity";
		imgOpacity = 10;
		btns.forEach((btn) => btn.style.background = "#a6dcff");
		e.target.style.setProperty("background", "#6e94ec",
								 	"important");
	} else if (e.target.id == "funkyColors") {
		selectedChoice = "funky"
		btns.forEach((btn) => btn.style.background = "#a6dcff");
		e.target.style.setProperty("background", "#6e94ec",
								 	"important");
	} 
});

let newCanvas = document.querySelector("#newCanvasContainer");
newCanvas.addEventListener("click", (e) => {
		let gridSize = document.querySelector("input");
		if (e.target.id == "plus") {
			if (gridSize.value >= 30) {
				gridSize.value = 30;
			} else if (gridSize.value <= 0) {
				gridSize.value = 1;
			} else {
				gridSize.value++;
			}
		} else if (e.target.id == "minus") {
			if (gridSize.value <= 1) {
				gridSize.value = 1;
			} else if (gridSize.value > 30 ) {
				gridSize.value = 1;
			} else {
				gridSize.value--;
			}
		} else if (e.target.id == "newCanvas") {
			imgOpacity = 10;
			if (isNaN(Number(gridSize.value))){
				gridSize.value = 16;	
			} else if (gridSize.value > 50) {
				gridSize.value = 50;
			} else if (gridSize.value < 1) {
				gridSize.value = 16;
			}
			let gridItem = gridSize.value;
			container.innerHTML = "";
			let gridPadding = 
				((480 / Number(gridSize.value)) / 2) + "px";
			createGrid(gridItem, gridPadding);
		}
});
