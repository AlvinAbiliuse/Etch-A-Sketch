
function createGrid(n) {
	for (i=0; i < (n * n) ; i++) {
		let grid = document.createElement("div");
		grid.className = "gridElement";
		container.appendChild(grid);
	}
}


let color = "#292929";
const container = document.querySelector("#container");
container.addEventListener("mouseover", (e) => {
	if (e.target.className == "gridElement") {
		e.target.style.background = color;
	}
});

createGrid(16);
