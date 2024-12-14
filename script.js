
function createGrid(n) {
	for (i=0; i < (n * n) ; i++) {
		let grid = document.createElement("div");
		grid.className = "gridElement";
		container.appendChild(grid);
	}
}



let color = "#292929";
let container = document.querySelector("#container");
container.addEventListener("mouseover", (e) => {
	if (e.target.className == "gridElement") {
		e.target.style.background = color;
	}
});

let newCanvas = document.querySelector("#newCanvasContainer");
newCanvas.addEventListener("click", (e) => {
		let gridSize = document.querySelector("input");
		console.log(gridSize.value);
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
			let gridItem = gridSize.value;
			console.log(((480 / Number(gridSize.value)) / 2) + "px");
			container.innerHTML = "";
			createGrid(gridItem);
			document.querySelector(".gridElement").style.padding = 
				((480 / Number(gridSize.value)) / 2) + "px";
		}
});
createGrid(16);
