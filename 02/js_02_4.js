var container = document.getElementsByClassName("container")[0];
container.style.padding = "5px";
container.style.border = "2px solid lightgreen";
container.style.width = "440px";
container.style.height = "455px";

var image = document.querySelector("img");
image.style.width = "120px";
image.style.height = "120px";
image.style.margin = "20px";

var textsAll = document.querySelectorAll("p");
var textFirst = textsAll[1];
var textLast = textsAll[textsAll.length - 1];


image.style.display = "block";
container.insertBefore(image, textFirst);


var buttonLeft = document.getElementById("left");
var buttonRight = document.getElementById("right");
var buttonHide = document.getElementById("hide");
var buttonDown = document.getElementById("down");
var buttonRestore = document.getElementById("restore");


var imageHigh = true;


buttonLeft.addEventListener("click", function() {
    image.style.display = "block";
   image.style.float = "left"; 
    changeContainerSize("left/right");
});

buttonRight.addEventListener("click", function() {
    image.style.display = "block";
    image.style.float = "right";
    changeContainerSize("left/right");
});

buttonHide.addEventListener("click", function() {
    image.style.display = "none";
    changeContainerSize("hide");
});

buttonDown.addEventListener("click", function() {
    image.style.display = "block";
    
    if (imageHigh) {
        container.insertBefore(textFirst, image);
        container.insertBefore(textsAll[2], image);
        container.insertBefore(textLast, image);
    }
   
    changeContainerSize("down");
});

buttonRestore.addEventListener("click", function() {
    image.style.display = "block";
    
    image.style.float = "none";
    container.insertBefore(image, textFirst);
    changeContainerSize("restore");
});


function changeContainerSize(buttonType) {
    if (buttonType === "left/right") {
        if (imageHigh) {
            container.style.height = "350px";
        } else {
            container.style.height = "455px";
        }
    } else if (buttonType === "restore") {
        imageHigh = true;
        container.style.height = "455px";
    } else if (buttonType === "hide") {
        container.style.height = "285px";
    } else if (buttonType === "down") {
        imageHigh = false;
        container.style.height = "455px";
    }
    

}