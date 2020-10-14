"use strict";

// Array

const tasks = [
  { name: "Recoger setas en el campo", completed: true },
  { name: "Comprar pilas", completed: true },
  { name: "Poner una lavadora de blancos", completed: true },
  {
    name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
    completed: false,
  },
];

// Query selector
const list = document.querySelector(".js-task");

// Add list items

let listItem = "";
for (let i = 0; i < tasks.length; i++) {
  let listItem = `<div><li>${tasks[i].name}</li><input type="checkbox" class = "check${i}"></div>`;
  console.log(listItem);
  list.innerHTML += listItem;
}

// Check box
for (let i = 0; i < tasks.length; i++) {
  if (tasks[i].completed === true) {
    console.log(tasks[i]);
    console.log(document.querySelector(`.check${i}`));
    document.querySelector(`.check${i}`).checked = true;
  }
}

console.log(listItem);
