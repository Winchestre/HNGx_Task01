let setDay = document.querySelector(".day");
let setTime = document.querySelector(".time");

//Days Array
const dayArr = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const days = new Date();
let day = dayArr[days.getDay()];
let milliSec = days.getTime();

setDay.innerHTML = day;
setTime.innerHTML = milliSec;
