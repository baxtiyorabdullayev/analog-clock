// "use strict";

let body = document.querySelector("body");

let box = document.createElement("div");
box.className = "clock-box";

let numberImages = document.createElement("img");
numberImages.className = "clock";
numberImages.src = "clock.png";

let handBox = document.createElement("div");
handBox.className = "hands-box";

let hourHand = document.createElement("div");
hourHand.className = "hour";

let minuteHand = document.createElement("div");
minuteHand.className = "minute";

let secondHand = document.createElement("div");
secondHand.className = "second";

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

box.appendChild(numberImages);
box.appendChild(handBox);
handBox.appendChild(hourHand);
handBox.appendChild(minuteHand);
handBox.appendChild(secondHand);
body.appendChild(box);
