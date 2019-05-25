var container = document.getElementsByClassName("container")[0];
container.style.border = "2px solid lightgreen";
container.style.width = "700px";
container.style.padding = "4px";

var form = document.getElementById("form");
form.style.display = "none";

var commentButton = document.querySelector("button");
var applyButton = form.lastElementChild;

var textarea = document.querySelector("textarea");
console.log(textarea.value);

var nameInput = document.getElementById("name");

commentButton.addEventListener("click", function() {
    form.style.display = "block";
});
applyButton.addEventListener("click", function() {
    if (textarea.value !== "") {
        textarea.value = "";
        nameInput.value = "";
        alert("Thank you for the information you entered.");
        form.style.display = "none";
    }
});