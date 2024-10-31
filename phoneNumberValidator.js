const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const result = document.getElementById("results-div");
const phoneRegex = /^1?[-\s]?(\(\d{3}\)|\d{3})[-\s]?\d{3}[-\s]?\d{4}$/;

const checkNumber = input => phoneRegex.test(input);

const updateUi = input => {
    if (input === "") {
        alert("Please provide a phone number");
        return;
    }
    const resultParagraph = document.createElement("p");
    resultParagraph.innerText = `${checkNumber(input) ? "Valid" : "Invalid"} US number: ${input}`;
    result.appendChild(resultParagraph);
}
checkBtn.addEventListener("click", () => {
    updateUi(userInput.value);
    userInput.value = "";
});
clearBtn.addEventListener("click", () => {
    result.innerHTML = "";
});
userInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        updateUi(userInput.value);
        userInput.value = "";
    }
});