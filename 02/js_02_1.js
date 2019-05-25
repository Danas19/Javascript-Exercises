var yellowButton = document.getElementById("yellow-button");
console.log(yellowButton);

var p = document.querySelector("p");
console.log(p);

yellowButton.addEventListener("click", function() {
    document.querySelector("p").style.color = "yellow";
});

document.getElementById("green-button").addEventListener("click",
    function() {
    document.querySelector("p").style.color = "green";
})

document.getElementById("red-button").addEventListener("click",
    function() {
    document.querySelector("p").style.color = "red";
})

var container = document.getElementsByClassName("container");
Array.from(container).forEach(c => {c.style.border = "2px solid lightgreen"; c.style.padding = "8px";});