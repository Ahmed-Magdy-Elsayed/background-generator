var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient")

function setGradient(){
    body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
    //getting the RGB Color and putting it at the screen
    css.textContent = body.style.background + ";";

    // css.textContent returns value of this css property and the body.style.background returns the value and set it to the screen 
}

//Add the event what you want to do
color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);