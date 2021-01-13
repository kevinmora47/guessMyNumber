"use strict";

// Dom manipulation.
console.log(document.querySelector(".message").textContent);
// Changing text content
document.querySelector(".message").textContent = "Kevin 🏋️‍♀️";
document.querySelector(".number").textContent = 13;
document.querySelector(".score").textContent = 20;

// Obtaining information.
document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
