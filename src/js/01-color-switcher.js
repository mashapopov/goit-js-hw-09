const startBtn = document.querySelector(`[data-start]`);
const stopBtn = document.querySelector(`[data-stop]`);
const body = document.body;
let timerId = null;
stopBtn.setAttribute('disabled', true);

startBtn.addEventListener("click", () => {
  stopBtn.removeAttribute('disabled');
    startBtn.setAttribute('disabled', true);
  timerId = setInterval(() => {
     let randomColor = getRandomHexColor();
      body.style.backgroundColor = `${randomColor}`;
  }, 1000);
});

stopBtn.addEventListener("click", () => {
  startBtn.removeAttribute('disabled');
  stopBtn.setAttribute('disabled', true);
  clearInterval(timerId);
});

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

