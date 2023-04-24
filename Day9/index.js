const data = ["Banana", "Mo:Mo", "Pizza"];
data.push("Dal-Bhat");
data.unshift("Egg Roll");//Adds element at first index
data.shift()//Remove first element
data.pop()//Removes last element

//Unshift puts an item at the beginning of the array
document.write(`${data}`);

const new_data = data.filter((item, index) => {
    return index !== 2;
});

document.write("<h2>After deletion<h2 />");
document.write(`${new_data}`);

// removing indexed element from an array, *.splice(elementIndex, n);
const returnedData = data.splice(0, 2);
document.write(data);
console.log(returnedData);

const dataDiv = document.getElementById("data");


if (data.length >= 6){    
    data.forEach(item => {
        const eachItem = document.createElement("div");
        eachItem.innerHTML = item + "<br />";
        dataDiv.appendChild(eachItem);
    });
}else {
    document.write("<h2>More Elements<h2/>");
}

// let userData = prompt("Enter your hobby : ");
// let userVerification = confirm("Do you want to proceed?");

// if (userVerification === true){

// switch (userData) {
//     case "football":
//         document.write(`<em>I love playing <strong>${userData}</strong></em>`);
//         break;
//     case "volleyball":
//     case "cricket":
//     case "snooker":
//         document.write(`My hobby is playing ${userData}`);
//         break;
//     default:
//         document.write("I don't know any sports");
//         break;
// }
// }
