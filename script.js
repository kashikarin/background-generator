var randomButton = document.querySelector("button");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var hexChar = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
var css = document.querySelector("h3");


function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value
	+ ", " 
	+ color2.value
	+ ")";
	css.textContent = body.style.background + ";";

}

// color1.addEventListener("input", setGradient);

// color2.addEventListener("input", setGradient);

function getRandomColor() {
	var color = "#";
	for (var i=0; i<6; i++) {
		var position = Math.floor(Math.random() * 16);
		color += hexChar[position];
	}
	return color;
}

function randomColors() {
	color1.value = getRandomColor();
	color2.value = getRandomColor();
	setGradient();
}


randomButton.addEventListener("click", randomColors);


setGradient();

