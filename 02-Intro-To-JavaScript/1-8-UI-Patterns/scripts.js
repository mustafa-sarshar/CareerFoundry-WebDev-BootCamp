"use strict";

(function () {
    const formEl = document.querySelector("form");
    const emailInputEl = document.querySelector("#email");
    const passInputEl = document.querySelector("#pass");
    const modalContainerEl = document.querySelector(".container-modal");

    emailInputEl.addEventListener("input", validateEmail);
    passInputEl.addEventListener("input", validatePass);

    function showErrorMessage(inputEl, message) {
        const containerEl = inputEl.parentElement;    // The .input-wrapper
        // Check and remove any existing errors
        const errorEl = containerEl.querySelector(".error-message");
        if (errorEl) {
            containerEl.removeChild(errorEl);
        }

        // Add the error if the message != 'empty'
        if (message) {
            const errorEl = document.createElement("div");
            errorEl.classList.add("error-message");
            errorEl.innerText = message;
            containerEl.appendChild(errorEl);
        }
    }

    function validateEmail() {
        const emailValue = emailInputEl.value;
        if (!emailValue) {
            showErrorMessage(emailInputEl, "This is a required field!");
            return false;
        }
        if (emailValue.indexOf("@") === -1) {
            showErrorMessage(emailInputEl, "You must enter a valid email address! (@ is missing)");
            return false;
        }
        if (emailValue.indexOf(".") === -1) {
            showErrorMessage(emailInputEl, "You must enter a valid email address! (. is missing)");
            return false;
        }
        showErrorMessage(emailInputEl, null);
        return true;
    }

    function validatePass() {
        const passValue = passInputEl.value;
        if (!passValue) {
            showErrorMessage(passInputEl, "Password is a required field!");
            return false
        }
        if (passValue.length < 8) {
            showErrorMessage(passInputEl, "The password needs to be at least 8 characters long!");
            return false;
        }
        showErrorMessage(passInputEl, null);
        return true;
    }

    function validateForm() {
        const isEmailValid = validateEmail();
        const isPassValid = validatePass();
        return isEmailValid && isPassValid;
    }

    window.addEventListener("keydown", (e) => {
        if (e.key == "Escape" && modalContainerEl.classList.contains("is-visible"))
            hideModal();
    })

    modalContainerEl.addEventListener("click", (e) => {
        if (e.target === modalContainerEl)
            hideModal();
    })

    function showModal(title, message) {
        modalContainerEl.innerHTML = "";    // Clear all child elements 

        // Add modal element
        const modalEl = document.createElement("div");
        modalEl.classList.add("modal");

        // Add child elements to modal element
        const modalBtnClose = document.createElement("button");
        modalBtnClose.classList.add("modal__close-button");
        modalBtnClose.innerText = "Close";
        modalBtnClose.addEventListener("click", hideModal);

        const modalTitleEl = document.createElement("h1");
        modalTitleEl.innerText = title;

        const modalTextEl = document.createElement("p");
        modalTextEl.innerText = message;

        // Initialize the Modal Container
        modalEl.appendChild(modalBtnClose);
        modalEl.appendChild(modalTitleEl);
        modalEl.appendChild(modalTextEl);
        modalContainerEl.appendChild(modalEl);
        modalContainerEl.classList.add("is-visible");
    }

    function hideModal() {
        modalContainerEl.classList.remove("is-visible");
    }

    formEl.addEventListener("submit", (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Successful");
            showModal("Submit Successful", `Logged in by ${emailInputEl.value}`);
        } else {
            console.log("Unsuccessful");
        }
    });
})();