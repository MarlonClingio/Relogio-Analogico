const hourHand = document.querySelector(".hour-hand");
const minuteHand = document.querySelector(".minute-hand");
const secondHand = document.querySelector(".second-hand");
const clocktime = document.querySelector(".clock-time");

const getTime = () => {
 const date = new Date();
   
 return {
    hours: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
 };
}

setInterval(() => {
    const { seconds, minutes, hours } = getTime();
    if ( minutes < 10 && hours >= 10) {
        time = `${hours}:0${minutes}`;
    } 
    else if ( minutes >= 10 && hours < 10) {
        time = `0${hours}:${minutes}`;
    } 
    else if ( minutes < 10 && hours < 10) {
        time = `0${hours}:0${minutes}`;
    } 
    else {
        time = `${hours}:${minutes}`;
    }

    secondHand.style.transform = `translate(0, -50%) rotate(${seconds * 6}deg)`;
    minuteHand.style.transform = `translate(0, -50%) rotate(${minutes * 6}deg)`;
    hourHand.style.transform = `translate(0, -50%) rotate(${hours * 30}deg)`;
    clocktime.innerText = time;
}, 1000);

