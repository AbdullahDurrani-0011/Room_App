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



// function onDidChangeModelContent() {
//   const topArea = document.getElementById("editor1");
//   const bottomArea = document.getElementById("editor2");


//   editor1.onDidChangeModelContent(() => {
//     editor2.setValue(editor1.getValue());
//   });
//   editor2.onDidChangeModelContent(() => {
//     editor1.setValue(editor2.getValue());
//   });

//   const startingMinutes = 5;

//   let time = startingMinutes * 60;
  

//   const countdownEl = document.getElementById("Countdown");

//   function updateCountdown() {

//      const minutes = Math.floor(time / 60);
//   let seconds = time % 60;
//  countdownEl.innerText = `${minutes}: ${seconds}`;
//     time--;
//   setInterval(updateCountdown, 1000);

//   }
  

//   function toggleEditors(editorToEnable, editorToDisable) {

//     if (time === 0){
  
//     editorToEnable.updateOptions({ readOnly: true });

//     editorToDisable.updateOptions({ readOnly: false });
//       time = startingMinutes * 60;
//   }
//   toggleEditors(topArea , bottomArea);
  
// }
// }

function waitForEditors(callback) {
  if (window.topArea && window.bottomArea) {
    callback();
  } else {
    setTimeout(() => waitForEditors(callback), 100);
  }
}

waitForEditors(() => {
  const startingMinutes = 5;
  let time = startingMinutes * 60;
  const countdownEl = document.getElementById("Countdown");  

  let isSyncing = false;

  topArea.onDidChangeModelContent(() => {
    if (isSyncing) return;
    isSyncing = true;
    bottomArea.setValue(topArea.getValue());
    isSyncing = false;
  });

  bottomArea.onDidChangeModelContent(() => {
    if (isSyncing) return;
    isSyncing = true;
    topArea.setValue(bottomArea.getValue());
    isSyncing = false;
  });

  setInterval(updateCountdown, 1000);

  function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    countdownEl.innerText = `${minutes}: ${seconds}`;
    time--;

    if (time < 0) {
      if (topArea.getOption(monaco.editor.EditorOption.readOnly)) {
        topArea.updateOptions({ readOnly: false });
        bottomArea.updateOptions({ readOnly: true });
      } else {
        bottomArea.updateOptions({ readOnly: false });
        topArea.updateOptions({ readOnly: true });
      }
      time = startingMinutes * 60;
    }
  }
});






// topArea.addEventListener("input", () => {
//   bottomArea.value = topArea.value;
// });

// bottomArea.addEventListener("input", () => {
//   topArea.value = bottomArea.value;
// });

// function updateCountdown() {
//   const minutes = Math.floor(time / 60);
//   let seconds = time % 60;

//   countdownEl.innerText = `${minutes}: ${seconds}`;
//   time--;

//   if (time == 0) {
//     if (topArea.disabled) {
//       topArea.disabled = false;
//       bottomArea.disabled = true;
//     } else {
//       bottomArea.disabled = false;
//       topArea.disabled = true;
//     }

//     time = startingMinutes * 60;
//   }
// }
