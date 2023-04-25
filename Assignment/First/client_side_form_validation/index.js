inputs = Array.from(document.getElementsByTagName("input"));
form = document.querySelector("#form");
message = document.querySelector("#message");
options = document.querySelectorAll("option");

invalid = document.createElement("span");
invalid.name = "invalid";
invalid.innerHTML = "Invalid Email";
invalid.style = "display: block;";
invalid.classList.add("error");

const error_message = "Field cannot be empty";

const regex = new RegExp("[a-z0-9]+@[a-z]+\.[a-z]{2,3}");

const addError = (node) => {
    node.style = "border-color: red;";
    node.classList.add("error-outline");
};

const removeError = (node) => {
    node.nextElementSibling.innerHTML = "";
    if (!node.classList.contains("success-outline")) {
        node.classList.remove("error-outline");
        node.classList.add("success-outline");
    }
}

let isFormConditionMet = false;

inputs.forEach(input => {
    if (input.name === "gender") {
        return;
    }

    input.addEventListener("keyup", () => {
        input.style = "border-color : none";

        if (input.name === "email") {
            if (regex.test(input.value)) {
                input.parentNode.childNodes.forEach(node => {
                    if (node === invalid) {
                        node.remove();
                    };
                });
            } else {
                isFormConditionMet = false;
                input.parentNode.appendChild(invalid);
            }
        }

        if (input.value.length < 5) {
            input.nextElementSibling.innerHTML = "Must have at least 5 characters.";

            if (!input.classList.contains("success-outline")) {
                addError(input);
                isFormConditionMet = false;
            }
        } else {
            removeError(input);
        }
    });

    input.addEventListener("focusout", () => {
        if (input.classList.contains("success-outline")) {
            input.classList.remove("success-outline");
            input.style = "border: 1px solid black";
        }
    });
});

const messageRemoval = (node) => {
    setInterval(() => {
        node.nextElementSibling.innerHTML = "";
    }, 2000);
};

form.addEventListener("submit", (event) => {
    console.log(isFormConditionMet);
    if (!isFormConditionMet) {
        event.preventDefault();
        if (message.value.length === 0) {
            message.nextElementSibling.innerHTML = error_message;
    
            messageRemoval(message);
            isFormConditionMet = false;
        } else {
            if (message.value.length > 5){
                isFormConditionMet = true;
            }
        }
    
        inputs.forEach((input) => {
            if (!input.name === "gender"){
                return;
            }
    
            if (input.value.length === 0) {
                input.nextElementSibling.innerHTML = error_message;
    
                messageRemoval(input);
                isFormConditionMet = false;
    
            } else {
                if (input.value.length > 6){
                    isFormConditionMet = true;
                }
            }
        });
    
        options.forEach(option => {
            if (option.selected === true && option.value === "none") {
                option.parentNode.nextElementSibling.innerHTML = error_message;
    
                messageRemoval(option.parentNode);
                isFormConditionMet = false;
            }
        });
    }
    console.log(isFormConditionMet);
});


