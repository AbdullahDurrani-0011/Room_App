// const text1 = document.getElementById("InnerText1");
// const text2 = document.getElementById("InnerText2");

// InnerText1.addEventListener("input", () => {
//   InnerText2.value = InnerText1.value;
// });

// InnerText2.addEventListener("input", () => {
//   InnerText1.value = InnerText2.value;
// });

// const topArea = document.getElementById("InnerText1");
// const bottomArea = document.getElementById("InnerText2");

// const topArea = document.getElementById("editor1");
// const bottomArea = document.getElementById("editor2");



// editor1.addEventListener("input", () => {
//   editor2.value = editor1.value;
// });

// editor2.addEventListener("input", () => {
//   editor1.value = editor2.value;
// });







const startingMinutes = 5;
let time = startingMinutes * 60;
const countdownEl = document.getElementById("Countdown");
setInterval(updateCountdown, 1000);

function updateCountdown() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  countdownEl.innerText = `${minutes}: ${seconds}`;
  time--;

  // console.log(time, "time---");

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
