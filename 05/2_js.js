(function () {
    var form = document.forms[0];
    var sentences = getSentences();
    var randomSentence = document.getElementById("randomSentence");

    form.addEventListener("submit", function (e) {
        addNewSentence(getNewSentenceObject());
    });
    
    document.getElementById("delete-storage").addEventListener("click", function() {
        sentences = [];
        localStorage.clear()
    });
    
    document.getElementById("generate").addEventListener("click", function generateSentence() {
        if (sentences.length === 0) {
            alert("Nothing in local storage to generate a sentence")
        } else {
            randomSentence.innerHTML = `${sentences[getRandomIndexOfSentences()].performer} ${sentences[getRandomIndexOfSentences()].action} ${sentences[getRandomIndexOfSentences()].document}.`;
            randomSentence.parentNode.style.display = "block";
        }
        
    });
    
    document.getElementById("hide").addEventListener("click", function() {
        randomSentence.parentNode.style.display = "none";
    });
    
    function getRandomIndexOfSentences() {
        return parseInt(Math.random() * sentences.length);
    }

    function getNewSentenceObject() {
        var inputs = document.querySelectorAll("input");
        return {
            "performer": inputs[0].value,
            "action": inputs[1].value,
            "document": inputs[2].value
        };
    }

    function addNewSentence(newSentenceObject) {
        sentences[sentences.length] = newSentenceObject;
        localStorage.setItem('sentences', JSON.stringify(sentences));
    }
    
    function getSentences() {
        let sentences = JSON.parse(localStorage.getItem('sentences'));
        if (!Array.isArray(sentences)) {
            sentences = [];
            console.log(`'sentences' was not an array, but now is.`);
        }
        return sentences;
    }
    
})();
