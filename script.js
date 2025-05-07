const deBtn = document.getElementById("deBtn");
const incBtn = document.getElementById("incBtn");
const resetBtn = document.getElementById("resetBtn");

const digitCount = document.getElementById("digitCount");
let counter = 0;

deBtn.onclick = function () {
    counter--;
    digitCount.textContent = counter;
}

inBtn.onclick = function () {
    counter++;
    digitCount.textContent = counter;
}

reBtn.onclick = function () {
    counter = 0;
    digitCount.textContent = counter;
}