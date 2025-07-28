const text1 = document.getElementById("InnerText1");
const text2 = document.getElementById("InnerText2");

InnerText1.addEventListener("input", () => {
  InnerText2.value = InnerText1.value;
});

InnerText2.addEventListener("input", () => {
  InnerText1.value = InnerText2.value;
});

const topArea = document.getElementById("InnerText1");
const bottomArea = document.getElementById("InnerText2");

const startingMinutes = 5;
let time = startingMinutes * 60;
const countdownEl = document.getElementById("Countdown");
setInterval(updateCountdown, 1000);

function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  countdownEl.innerHTML = `${minutes}: ${seconds}`;
  time--;

  if (time == 0) {
    if (topArea.disabled) {
      topArea.disabled = false;
      bottomArea.disabled = true;
    } else {
      bottomArea.disabled = false;
      topArea.disabled = true;
    }

    time = startingMinutes * 60;
  }
}


