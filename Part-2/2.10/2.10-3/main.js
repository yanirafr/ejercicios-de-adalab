"use strict";

const btn = document.querySelector(".js-btn");
const user = document.querySelector(".js-user");
console.log(user);
console.log(btn);

function getInput() {
  let userInput = user.value;
  function getUser() {
    fetch(`https://api.github.com/users/${userInput}`)
      .then((response) => response.json())
      .then((data) => {
        const userName = document.querySelector(".js-name");
        userName.innerHTML = data.name;
        console.log(data.name);
      });
  }
  getUser();
}

btn.addEventListener("click", getInput);
