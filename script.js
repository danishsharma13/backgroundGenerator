var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");
var lineBreak = document.createElement("br");

// Setting the background color to the original CSS 
body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
// Setting h3 as the background color name
css.textContent = body.style.background;

// creating a new element to display original CSS bg color
var initialCSS = document.createElement("h4");
// creating the name for the color
initialCSS.appendChild(document.createTextNode("Initial CSS Background: " + body.style.background));
// adding the new name and the h4 to body as the child
body.appendChild(initialCSS);

var orignalCSS = document.createElement("Button");
orignalCSS.appendChild(document.createTextNode("Original"));
var c1 = color1.value;
var c2 = color2.value;

initialCSS.appendChild(lineBreak);
initialCSS.appendChild(orignalCSS);


// Setting color to orignial color
function Orig(){
	body.style.background = "linear-gradient(to right, " + c1 + ", " + c2 + ")";
	color1.value = c1;
	color2.value = c2;
}

// random color generator
function ranDom(){
	color1.value = '#'+Math.random().toString(16).substr(-6);
	color2.value = '#'+Math.random().toString(16).substr(-6);

	bodyBackground();
}

// bodyBackground is to set the bg to the input
function bodyBackground () {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background + ";";

}




color1.addEventListener("input", bodyBackground);

color2.addEventListener("input", bodyBackground);

button.addEventListener("click", ranDom);

orignalCSS.addEventListener("click", Orig);
