const countDisplay = document.getElementById("count");
const increaseButton = document.getElementById("increaseBtn");
const decreaseButton = document.getElementById("decreaseBtn");
const resetButton = document.getElementById("resetBtn");
const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");

let count = 0;

function updateCount() {
    countDisplay.textContent = count;
}

increaseButton.addEventListener("click", function () {
    count = count + 1;
    updateCount();
});

decreaseButton.addEventListener("click", function () {
    count = count - 1;
    updateCount();
});

resetButton.addEventListener("click", function () {
    count = 0;
    updateCount();
});

loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    loginMessage.textContent = "Form submitted for this demo.";
});
