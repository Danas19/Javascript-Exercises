var image = document.querySelector("img");
image.style.width = "200px";
image.style.height = "200px";
image.style.margin = "20px";

var imageColorfulSrc = image.getAttribute("src");
var imageNotColorfulSrc = "img/HTML5_1Color_Black.png";

var container = document.getElementsByClassName("container")[0];
container.style.border = "2px solid lightgreen";
container.style.width = "240px";

var figure = container.firstElementChild;
figure.style.margin = "7px";

var buttonMakeColorful = document.querySelector("button");
var buttonMakeNotConorful = buttonMakeColorful.nextElementSibling;

buttonMakeColorful.addEventListener("click", function() {
    image.setAttribute("src", imageColorfulSrc);
})
buttonMakeNotConorful.addEventListener("click", function() {
    image.setAttribute("src", imageNotColorfulSrc);
})