(function() { var button = document.querySelector("button");

var input = document.querySelector("input");
var progressBar = document.getElementsByClassName("progress-bar")[0];
var lastClass;

input.addEventListener("keypress", function(e) {
    if (e.which === 13) {
        if (!alertIfInputBad(input.value)) {
            changeBar(input.value);
        } 
        clearInput();
    }
});

function changeBar(inputValue) {
    progressBar.style.ariaValuenow = inputValue;
    progressBar.style.width = inputValue + "%";
    progressBar.classList.add(BarRightClassName(inputValue));
    console.log(progressBar.classList.length);
    if (progressBar.classList.length > 2) {
        deleteLastClass();
    }
    lastClass = BarRightClassName(inputValue);
}

function BarRightClassName(inputValue) {

    if (inputValue < 40) {
        return "bg-danger";
    } else if (inputValue < 70) {
        return "bg-info";
    }
    return "bg-success";
}

function deleteLastClass() {
    progressBar.classList.remove('' + lastClass);
    console.log(progressBar.classList);
}


function alertIfInputBad(inputValue) {
    if (inputValue < 0 || inputValue > 100) {
        alert("Enter number between 0 and 100. If you will enter something wrong again, you may never see this message again.");
        return true;
    }
    return false;
}

function clearInput() {
    input.value = "";
}
})();
