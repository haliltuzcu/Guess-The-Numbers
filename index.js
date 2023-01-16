let input = document.getElementById(`box`);
let button = document.getElementById(`btn`);
let p = document.getElementById(`guess`);
let number = Math.floor(Math.random() * 100);
let span = document.getElementById(`span`);
let img = document.getElementById(`img`);

let counter = 4;
console.log(number);

button.addEventListener("click", () => {
  console.log(input.value);

  if (counter > 0) {
    if (number > input.value) {
      span.innerText = `${input.value}'den daha büyük sayi girmelisin, ${counter} hakkin kaldi`;
      counter--;
    } else if (number < input.value) {
      span.innerText = ` ${input.value}'den dah küçük sayi girmelisin, ${counter} hakkin kaldi`;
      counter--;
    } else if (number == input.value) {
      span.innerText = `KAZANDIN ${5 - counter}.denemede, sayı ${input.value}`;
      document.getElementById("img").src = "./images/Animation-para.gif";
      img.style.width = "50vw";
      window.setTimeout(function () {
        location.reload(true);
      }, 3000);
    } 
    else {
      span.innerText = `${input.value} bir sayi degil`;
    }
    input.focus();
    input.value = "";
  } else if (counter === 0) {
    p.innerText = `Game Over`;
    document.getElementById("img").src = "./images/Animation.gif";
    img.style.width = "40vw";
    window.setTimeout(function () {
      location.reload(true);
    }, 3000);
  }
});

window.addEventListener("load", () => {
  input.focus();
});

input.addEventListener("keydown", (event) => {
  if (event.code === "Enter") {
    button.click();
  }
});
