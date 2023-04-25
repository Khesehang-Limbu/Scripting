// Creating a Timer mechanism using the built-in javascript Date() object;

const start = document.getElementById("start");
const stop = document.getElementById("stop");
const display = document.getElementById("display-time");
const container = document.getElementById("container");
const containerManual = document.getElementById("containe-manual");

let id = "";
let manualId = "";

start.addEventListener("click", function () {
    id = setInterval(() => {
        const date = new Date();
        display.innerHTML = date;
    }, 1000);
});

stop.addEventListener("click", function () {
    if (id !== "") {
        clearInterval(id);
    } else {
        const h2 = document.createElement("h2");
        h2.innerHTML = "Start the timer first";
        h2.style.color = "red";
        h2.style.textAlign = "center";
        container.appendChild(h2);

        setTimeout(()=>{
            container.removeChild(h2);
        }, 2000);
    }
})

// Creating a foramtted Timer mechanism manually using javascript Date() object's methods;
const startManual = document.getElementById("start-manual");
const stopManual = document.getElementById("stop-manual");
const displayManual = document.getElementById("display-time-manual");
const monthsString = ["Jan", "Feb", "March", "April", "May", "June", "July", "August", "Sep", "Oct", "Nov", "Dec"];

startManual.addEventListener("click", function () {
    manualId = setInterval(() => {
        const date = new Date();
        let weekDay = date.getDay() + 1;
        let year = date.getFullYear();
        let month = date.getMonth();
        let day = date.getDate();
        let hour = date.getHours();
        let min = date.getMinutes();
        let secs = date.getSeconds();
        let weekDayInString = "";
        let hourInString = "";
        let amPm = "AM";

        switch (weekDay) {
            case 1:
                weekDayInString = "Sun";
                break;
            case 2:
                weekDayInString = "Mon";
                break;
            case 3:
                weekDayInString = "Tue";
                break;
            case 4:
                weekDayInString = "Wed";
                break;
            case 5:
                weekDayInString = "Thu";
                break;
            case 6:
                weekDayInString = "Fri";
                break;
            case 7:
                weekDayInString = "Sat";
                break;
            default:
                break;
        }

        const monthInNum = monthsString.map((m, index) => {
            return {
                month: m
            };
        });

        if (hour >= 0 && hour <= 12) {
            hourInString = (hour % 12);
            amPm = "AM";
        } else {
            hourInString = (hour % 12);
            amPm = "PM";
        }

        displayManual.innerHTML = `${weekDayInString} ${monthInNum[month].month} ${day} ${year} ${hourInString}:${min}:${secs} ${amPm}`;
    }, 1000);
});


stopManual.addEventListener("click", function () {
    if (manualId !== ""){
        clearInterval(manualId);
    }else {
        const h2 = document.createElement("h2");
        h2.innerHTML = "Start the timer first";
        h2.style.color = "red";
        h2.style.textAlign = "center";
        containerManual.appendChild(h2);

        setTimeout(()=>{
            containerManual.removeChild(h2);
        }, 2000);
    }
});

