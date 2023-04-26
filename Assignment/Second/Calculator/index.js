const calculatorBody = document.getElementsByClassName("calculator-body")[0];
const operands = document.getElementById("operands");
const result = document.getElementById("result");

const numbers = ["AC", "⌫", "/", "*", 7, 8, 9, "-", 4, 5, 6, "+", 1, 2, 3, 0, ".", "="];
let operation = "";
let symbol = "";


numbers.forEach((item, index) => {
    const num = document.createElement("div");
    num.classList.add("numbers");

    if (index == 15) {
        num.classList.add("zero");
    }

    if (index == 11) {
        num.classList.add("plus");
    }

    num.innerHTML = item;
    num.value = item;
    calculatorBody.appendChild(num);


    num.addEventListener("click", function(event) {
        let clickedItem = event.target.value;
        if (clickedItem !== "AC" && clickedItem !== "⌫" && clickedItem !== "="){
            operation += clickedItem;
            operands.innerHTML = operation;
        }else if (clickedItem === "AC"){
                operands.innerHTML = "";
                operation = "";
                result.innerHTML = "";
        }else if (clickedItem === "⌫"){
                const operationArray = Array.from(operation);
                operationArray.pop();
                operation = operands.innerHTML = operationArray.join('');
        }else if (clickedItem === "="){
            total = eval(operation);

            if (!Number.isInteger(total)){
                total = total.toFixed(6);
            }
            result.innerHTML = total;
            operation = result.innerHTML;
        }
    });
});

window.addEventListener("keypress", function(event){
    const pressedKey = event.key;

    if (pressedKey == "Enter"){
        symbol = "=";
        console.log(symbol);
    }else if (pressedKey == "Delete"){
        symbol = "⌫";
    }else{
        symbol = pressedKey;
    }

    numbers.forEach(item => {
        if (symbol == item){
            if (symbol !== "⌫" && symbol !== "="){
                operation += item;
                operands.innerHTML = operation;
            }else if (symbol === "⌫"){
                    const operationArray = Array.from(operation);
                    console.log(operationArray);
                    operationArray.pop();
                    operation = operands.innerHTML = operationArray.join('');
                    console.log(operation);
            }else if (symbol === "="){
                total = eval(operation);
                if (!Number.isInteger(total)){
                    total = total.toFixed(6);
                }
                result.innerHTML = total;
                operation = result.innerHTML;
            }
        }
    })
});


