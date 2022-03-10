const whiteKeys = document.querySelectorAll(".w");
const keys = document.querySelectorAll(".key");
const btn = document.querySelector(".color-btn");
const rBtn = document.querySelector(".r-btn");
const colorPicker = document.querySelector(".color-pick")



keys.forEach(k => {
  k.addEventListener("click", () => playAudio(k))
})

function playAudio(k) {
  const audioData = document.getElementById(k.dataset.note);
  audioData.currentTime = 0;
  audioData.play();
}


btn.addEventListener("click", () => {
  let p = ["a" + "b" + "c" + "d" + "e" + "f" + 0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9]
  p.forEach(l => {
    let result = l[Math.floor(Math.random(p * 10) + Math.floor(Math.random() * 16))] +
    l[Math.floor(Math.random(l * 10) + Math.floor(Math.random() * 16))] + 
    l[Math.floor(Math.random(l * 10) + Math.floor(Math.random() * 16))] +
    l[Math.floor(Math.random(l* 10) + Math.floor(Math.random() * 16))] +
    l[Math.floor(Math.random(l * 10) + Math.floor(Math.random() * 16))] +
    l[Math.floor(Math.random(l * 10) + Math.floor(Math.random() * 16))];
    let finalResult = "#" + result;
    for (let i = 0; i < whiteKeys.length; i++) {
      whiteKeys[i].style.background = finalResult;
    }
    btn.innerText = finalResult;
  });
})



rBtn.addEventListener("click", () => {
  whiteKeys.forEach(k => {
    k.style.background = "white";
  })
  btn.innerText = "Random Key Colors";
})


colorPicker.addEventListener("click", (k) => {
  let colorData = document.querySelector('.color-pick').value;
  for (let i = 0; i < whiteKeys.length; i++) {
    whiteKeys[i].style.background = colorData;
  }
})