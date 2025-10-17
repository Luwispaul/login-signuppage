"use strict";
const modeButton = document.querySelectorAll(".link");
const signupLink = document.getElementById(".signup-page");
const loginLink = document.getElementById(".login-page");
const loginForm = document.querySelector(".login-form");
const signupForm = document.querySelector(".signup-form");

const changeMode = function () {
  loginForm.classList.toggle("hidden");
  signupForm.classList.toggle("hidden");
};

// loginLink.addEventListener("click", changeMode);
// signupLink.addEventListener("click", changeMode);

modeButton.forEach((btn) => {
  btn.addEventListener("click", changeMode);
});
