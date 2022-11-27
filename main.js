// "use strict";

let hourHand = document.querySelector(".hour"),
  minuteHand = document.querySelector(".minute"),
  secondHand = document.querySelector(".second");

function analogClock() {
  let now = new Date();

  let second = now.getSeconds();
  let minute = now.getMinutes();
  let hour = now.getHours();

  let hourDegree = 30 * hour + minute / 2;
  let minuteDegree = 6 * minute;
  let secondDegree = 6 * second;

  secondHand.style.transform = `rotate(${secondDegree}deg)`;
  minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;
}
setInterval(analogClock, 1000);
