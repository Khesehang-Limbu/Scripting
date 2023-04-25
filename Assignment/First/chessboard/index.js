board = document.getElementById("board");

let i = 0;
for (i = 1; i<9; i+=1){
    for (let j = 1; j<9; j++){
        const square = document.createElement("div");
        square.classList.add("square");
        if (i % 2 !== 0){
            if (j%2 === 0){
                square.classList.add("black");
            }else{
                square.classList.add("white");
            }
        }else {
            if (j % 2 !== 0){
                square.classList.add("black");
            }else{
                square.classList.add("white");
            }
        }
        board.appendChild(square);
    }
}

squares = document.getElementsByClassName("square");
console.log(Array.from(squares));

letters = ["A", "B", "C", "D", "E", "F", "G", "H"];
for (let i = 53, j = 0; i < 64; i++, j++){
    letter = document.createElement("span");
    letter.innerHTML = letters[j];
    letter.classList.add("text");
    if (j < 8){
        board.appendChild(letter);
    }
}

numbersArray = ["1", "2", "3", "4", "5", "6", "7", "8"];
numberDisplay = document.createElement("div");
numberDisplay.classList.add("right-numbers");
numberDisplay.classList.add("number-position");
document.body.appendChild(numberDisplay);

numbersArray.forEach(number => {
    n = document.createElement("span");
    n.innerHTML = number;
    n.classList.add("text");
    numberDisplay.appendChild(n);
});