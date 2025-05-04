// 1

let count = 0;

const interval = setInterval(() => {
  count++;
  console.log(`повідомлення ${count}`);

  if (count === 5) {
    clearInterval(interval);
    console.log("інтервал зупинено після 5 повідомлень.");
  }
}, 1000);

// 2

let position = 0;
const box = document.getElementById("box");

setInterval(() => {
  position += 5;
  if (position > window.innerWidth) {
    position = -50;
  }
  box.style.left = position + "px";
}, 1000);

// 3

let score = 0;
let time = 10;

const circle = document.getElementById("circle");
const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
circle.onclick = function () {
  score++;
  scoreEl.textContent = score;
  moveCircle();
};
function moveCircle() {
  let x = Math.random() * (window.innerWidth - 50);
  let y = Math.random() * (window.innerHeight - 50);
  circle.style.left = x + "px";
  circle.style.top = y + "px";
}
let timer = setInterval(function () {
  time--;
  timeEl.textContent = time;
  
  if (time === 0) {
    clearInterval(timer);
    circle.style.display = "none";
    alert("Гру завершено! Очки: " + score);
  }
}, 1000);
moveCircle();

// 4 

const input = document.getElementById("seconds");
const button = document.getElementById("startBtn");
const message = document.getElementById("message");

button.onclick = function () {
  const seconds = parseInt(input.value);

  if (isNaN(seconds) || seconds <= 0) {
    message.textContent = "Введіть коректне число секунд.";
    return;
  }

  message.textContent = `Очікуємо ${seconds} секунд...`;

  setTimeout(function () {
    message.textContent = "Час вийшов!";
  }, seconds * 1000);
};



