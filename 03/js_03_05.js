(function () {
    var button = document.querySelector("button");

    var form = document.forms[0];
    console.log(form);
    var inputs = document.querySelectorAll("input");
    var weightKgInput = inputs[0];
    console.log(weightKgInput);
    var heightCmInput = inputs[1];

    var ats = document.createElement("p");
    
    

    button.addEventListener("click", function(e) {
    e.preventDefault();
        
        let heightM = heightCmInput.value / 100;
        let weightKg = Number(weightKgInput.value);
        
        let kmi = weightKg / (heightM * heightM);
        
    ats.innerHTML = "KMI: " + kmi;
    form.appendChild(ats);
});
    
    
    weightKgInput.addEventListener("focus", function() {
        weightKgInput.style.backgroundColor = "green";
    });
    
    weightKgInput.addEventListener("blur", function() {
        weightKgInput.style.backgroundColor = "white";
    });
    
    heightCmInput.addEventListener("focus", function() {
        heightCmInput.style.backgroundColor = "green";
    });
    
    heightCmInput.addEventListener("blur", function() {
        heightCmInput.style.backgroundColor = "white";
    });
})();
