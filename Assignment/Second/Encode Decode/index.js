const password = document.getElementById("password");
const btns = Array.from(document.getElementsByClassName("btn"));
const encryptedInput = document.getElementById("encryptedText");
const encryptedLabel = document.getElementById("encryptedLabel");

let encodedText = "";
let decodedText = "";

btns.forEach(btn => {
    btn.addEventListener("click", function(event){
        const {name} = event.target;
        const value = password.value;

        if (name === "encode"){
            encodedText = btoa(value);
            encryptedInput.value = encodedText;
            encryptedInput.type = "text";
            encryptedLabel.innerHTML = "Encoded Value";
        }

        if (name === "decode"){
            decodedText = atob(encodedText);
            encryptedInput.value = decodedText;
            encryptedInput.type = "text";
            encryptedLabel.innerHTML = "Decoded Value";
        }
    });
});