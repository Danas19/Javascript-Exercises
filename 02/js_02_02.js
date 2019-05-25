var image = document.querySelector("img");
image.style.width = "200px";
image.style.height = "200px";
image.style.margin = "20px";

var container = document.getElementsByClassName("container")[0];
container.style.border = "2px solid lightgreen";
container.style.width = "240px";

var figure = container.firstElementChild;
figure.style.margin = "7px";

var buttonMakeBigger = document.querySelector("button");
var buttonMakeSmaller = buttonMakeBigger.nextElementSibling;

buttonMakeBigger.addEventListener("click", function() {
  image.style.width = "400px";
  image.style.height = "400px";
    container.style.width = "440px";
 });
buttonMakeSmaller.addEventListener("click", function() {
    image.style.width = "200px";
    image.style.height = "200px";
    container.style.width = "240px";
})