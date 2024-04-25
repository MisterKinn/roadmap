const clockElement = document.querySelector("#clock");
const greetingElement = document.querySelector("#greeting");

function updateTime() {
    const now =new Date();
    const hr = String(now.getHours()).padStart(2, "0");
    const min = String(now.getMinutes()).padStart(2, "0");
    const sec = String(now.getSeconds()).padStart(2, "0");

    clockElement.innerText = hr+":"+min+":"+sec;
}

function setGreeting() {
    const now = new Date();
    const hr = now.getHours();

    if (hr >=6 && hr < 12) {
        greetingElement.innerText = "학교갈시간";
    } else if (hr >= 12 && hr <18) {
        greetingElement.innerText = "점심시간";
    } else {
        greetingElement.innerText = "야자할시간";
    }
}

setInterval(updateTime, 1000);
setInterval(setGreeting, 1000);