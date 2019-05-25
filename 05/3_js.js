(function () {
    var form = document.forms[0];
    var selectTag = document.querySelector("select");
    var input = document.querySelector("input");

    var currentMoney = getCurrentMoney();

    var currentMoneyText = document.getElementById("current-money-text");

    var history = getHistory();
    var historyTable = document.getElementById("history-table");

    window.onload = function () {
        setCurrentMoneyText();
        setHistoryText();
    }

    form.addEventListener("submit", function (e) {
        var selectedValue = selectTag.options[selectTag.selectedIndex].value;
        var numberInTextfield = Number(input.value);

        if (!changeAccountBalance(numberInTextfield, selectedValue)) {
            e.preventDefault();
            input.value = "";
        } else {
            changeHistory(numberInTextfield, selectedValue);
        }

    });

    document.getElementById("delete-storage").addEventListener("click", function () {
        localStorage.clear();
        currentMoney = 0 * 1;
        history = [];
        setCurrentMoneyText();
        setHistoryText();
    });

    document.getElementById("show-history").addEventListener("click", function () {
        setHistoryText(Number(document.getElementById("history-filter-input").value));
    });

    function setHistoryText(withSumsBiggerThan) {
        let newTr;
        let newTd;
        
        while (historyTable.firstChild) {
            historyTable.removeChild(historyTable.firstChild);
        }

        history.forEach(e => {
            if (withSumsBiggerThan === undefined || e.sumOfMoney >= withSumsBiggerThan) {
                newTr = document.createElement("tr");
                newTd = document.createElement("td");

                newTd.textContent = e.sumOfMoney;

                historyTable.appendChild(newTr);
                newTr.appendChild(newTd);

                newTr.style.backgroundColor = e.color;
            }

        });
    }

    function changeHistory(numberInTextfield, action) {
        let newTransaction = {
            "color": "grey",
            "sumOfMoney": numberInTextfield
        };
        if (action === "add") {
            newTransaction.color = "green";
        } else {
            newTransaction.color = "red";
        }
        history[history.length] = newTransaction;
        history.sort((e1, e2) => e2.sumOfMoney - e1.sumOfMoney);
        localStorage.setItem('history', JSON.stringify(history));
    }

    function getHistory() {
        let history = JSON.parse(localStorage.getItem('history'));
        if (!Array.isArray(history)) {
            history = [];
        }
        return history;
    }

    function setCurrentMoneyText() {
        currentMoneyText.textContent = `Money in bank account: ${currentMoney} Eur.`;
    }

    function changeAccountBalance(numberInTextfield, action) {
        if (isNaN(numberInTextfield)) {
            alert("You did not entered a number, you entered text.");
            return false;
        } else if (numberInTextfield <= 0) {
            alert(`Can not ${action} ${numberInTextfield} amount of money. Please enter a number, which is bigger than 0.`);
            return false;
        } else if (action !== "add" && numberInTextfield > currentMoney) {
            alert(`Can not take ${numberInTextfield} \u20AC out of account. There are ${currentMoney} \u20AC in account.`);
            return false;
        } else if (action === "add") {
            currentMoney += numberInTextfield;
        } else {
            currentMoney -= numberInTextfield;
        }

        localStorage.setItem('currentMoneyInAccount', currentMoney);
        setCurrentMoneyText();

        return true;
    }

    function getCurrentMoney() {
        let currentMoney = localStorage.getItem('currentMoneyInAccount');

        if (typeof currentMoney === Object) {
            return 0;
        }
        return currentMoney * 1;
    }
})();
