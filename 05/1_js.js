var form = document.forms[0];
var inputs = document.querySelectorAll("input");

console.log("Name stored in localStorage: '" + localStorage.getItem('name') + "'");
console.log("Surname stored in localStorage: '" + localStorage.getItem('surname') + "'");
console.log("Age stored in localStorage: '" + localStorage.getItem('age') + "'");

form.addEventListener("submit", function (e) {
    localStorage.setItem('name', inputs[0].value);
    localStorage.setItem('surname', inputs[1].value);
    localStorage.setItem('age', inputs[2].value);
});
