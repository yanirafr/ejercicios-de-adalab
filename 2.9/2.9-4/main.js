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
const count = document.querySelector(".js-count");

// Add list items

let listItem = "";
for (let i = 0; i < tasks.length; i++) {
  let listItem = `<div><li class="list-item${i}">${tasks[i].name}</li><input type="checkbox" class = "check${i}"></div>`;
  //console.log(listItem);
  list.innerHTML += listItem;
}

// Check box

for (let i = 0; i < tasks.length; i++) {
  if (tasks[i].completed === true) {
    //Check
    // console.log(tasks[i]);
    // console.log(document.querySelector(`.check${i}`));
    document.querySelector(`.check${i}`).checked = true;

    //Add CSS class
    // console.log(document.querySelector(`.list-item${i}`));
    document.querySelector(`.list-item${i}`).classList.add("complete");
  }
}

// Click function

function userCheck() {
  for (let i = 0; i < tasks.length; i++) {
    if (document.querySelector(`.check${i}`).checked === true) {
      tasks[i].completed = true;
      document.querySelector(`.list-item${i}`).classList.add("complete");
    } else if (document.querySelector(`.check${i}`).checked === false) {
      tasks[i].completed = false;
      document.querySelector(`.list-item${i}`).classList.remove("complete");
    }
  }
  //   console.log(tasks);

  // TOTAL TASKS

  // Variables
  let done = 0;
  let notDone = 0;

  // Completed tasks
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].completed === true) {
      done++;
    } else if (tasks[i].completed === false) {
      notDone++;
    }
  }
  // Write on page
  count.innerHTML = `Tienes ${tasks.length} tareas, ${done} completadas y ${notDone} por hacer`;
}

for (let i = 0; i < tasks.length; i++) {
  document.querySelector(`.check${i}`).addEventListener("click", userCheck);
  // console.log(document.querySelector(`.check${i}`));
}

// TOTAL TASKS

// Variables
let done = 0;
let notDone = 0;

// Completed tasks
for (let i = 0; i < tasks.length; i++) {
  if (tasks[i].completed === true) {
    done++;
  } else if (tasks[i].completed === false) {
    notDone++;
  }
}

// Write on page
count.innerHTML = `Tienes ${tasks.length} tareas, ${done} completadas y ${notDone} por hacer`;
