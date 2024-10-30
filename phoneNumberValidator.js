const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const result = document.getElementById("results-div");
const phoneRegex = /^1?[-\s]?(\(?\d{3}\)?)[-\s]?\d{3}[-\s]?\d{4}$/;

const checkNumber = input => phoneRegex.test(input);

const updateUi = input => {
    result.innerHTML += `<p>${checkNumber(input) ? "Valid" : "Invalid"} US number: ${input}</p>`;
}
checkBtn.addEventListener("click", () => {
    updateUi(userInput.value);
    userInput.value = "";
});
clearBtn.addEventListener("click", () => {
    result.innerText = "";
});
userInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        updateUi(userInput.value);
        userInput.value = "";
    }
});