const body = document.body;

const bubble = document.createElement("div");
bubble.classList.add("bubble");
body.appendChild(bubble);
let x = 0;
let y = 0;
let width = 10;
let height = 10;

const id = setInterval(()=> {
    width += 5;
    height += 5;

    bubble.style.width = width + "px";
    bubble.style.height = height + "px"; 

    if (width === 1000){
        clearInterval(id);
    }
}, 1000);


bubble.addEventListener("mousemove", function(event){
    x = event.clientX;
    y = event.clientY;
    bubble.style.top = y + "px";
    bubble.style.left = x + "px";

});

