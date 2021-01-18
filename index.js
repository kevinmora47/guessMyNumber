"use strict";

// Dom manipulation.
console.log(document.querySelector(".message").textContent);
// Changing text content
document.querySelector(".message").textContent = "Kevin 🏋️‍♀️";
document.querySelector(".number").textContent = 23;
document.querySelector(".score").textContent = 20;

// Obtaining information.
document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);

document.querySelector(".message").textContent = "Correct Number! 🎉";

// Apllying content to a element manipulating the dom.
document.querySelector(".number").textContent = 13;
