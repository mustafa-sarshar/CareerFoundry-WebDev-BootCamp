const containerEl = document.querySelector(".container");
const paragraphsEl = document.querySelectorAll(".container-paragraph");

function btnClickMe__MoveParagraph() {
    const paragraphTop = paragraphsEl[0];
    const paragraphBottom = paragraphsEl[1];
    if (paragraphBottom.innerText === "") {
        paragraphBottom.innerText = paragraphTop.innerText;
        paragraphTop.innerText = "";
    } else {
        paragraphTop.innerText = paragraphBottom.innerText;
        paragraphBottom.innerText = "";
    }
}

const initDOMs = (function() {
    const btnEl = document.createElement("button");
    btnEl.innerText = "Click Me to Move the Paragraph";
    btnEl.addEventListener("click", btnClickMe__MoveParagraph);
    containerEl.appendChild(btnEl);
})();

function renderInput(event) {
    const inputEl = event.target;
    const inputValue = inputEl.value;
    const inputTarget = inputEl.getAttribute("data-target");
    const outputEl = document.querySelector(".user__" + inputTarget);

    outputEl.innerText = inputValue;
}

document.querySelectorAll("input").forEach(function (inputEl) {
    inputEl.addEventListener("change", renderInput);
});
