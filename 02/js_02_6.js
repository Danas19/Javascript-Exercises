var container = document.getElementsByClassName("container")[0];
container.style.border = "2px solid lightgreen";
container.style.width = "700px";
container.style.padding = "4px";

var button = document.querySelector("button");

var h3 = document.createElement("h3");
h3.textContent = "Lorem Ipsum pastraipa";
var p = document.querySelector("p");

button.addEventListener("click", function() {
    container.insertBefore(h3, p);
});