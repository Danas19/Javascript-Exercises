(function () {
    var button = document.querySelector("button");
    
    var input = document.querySelector("input");
    var list = document.querySelector("ul");

    button.addEventListener("click", function(e) {
        e.preventDefault();
        
        let textInputed = input.value;
        let newLi = document.createElement("li");
        newLi.innerHTML = textInputed;
        
        list.appendChild(newLi);
        input.value = "";
});
})();
