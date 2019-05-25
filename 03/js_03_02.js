var input1 = document.querySelector("input");
var input2 = input1.nextElementSibling.nextElementSibling;

console.log(input1);
console.log(input2);

var container = document.getElementsByClassName("container")[0];
var button = document.querySelector("button");

console.log(button);

var ats = document.createElement("p");

button.addEventListener("click", function(e) {
    e.preventDefault();
    ats.innerHTML = "Result: " + (Number(input1.value) + Number(input2.value));
    container.appendChild(ats);
});