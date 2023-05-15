// console.log(window);
// Note: Since frame and iframe elements neeed to load onto a page through network, so they need to be loaded completely to access them and make changes via JS.

let cFrames = window.frames;
const frame2 = document.getElementById("frame2");
const frame1 = document.getElementById("frame1");

console.log(frame2.contentDocument.body.style.backgroundColor = "blue");

frame1.onload = function () {
    const frameBody =  frame1.contentDocument.body;
    console.log(frameBody.style.backgroundColor = "red");
    frameBody.style.color = "white";
    frameBody.children[0].style.fontSize = "3rem";
    // console.log(frameBody.children);
    
}
// console.log(cFrames.document.body.childNodes[1].contentWindow.frameElement.contentDocument.body.childNodes);
// console.log(cFrames[0].document);
// console.log(cFrames[0].frameElement);
// console.log(cFrames[1].frameElement);

// for (let i = 0; i < cFrames.length; i++) {
//     cFrames[i].document.body.style.color = "red";
//     console.log(cFrames[i].document);
// }


