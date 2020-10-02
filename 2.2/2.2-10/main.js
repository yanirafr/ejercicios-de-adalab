"use strict";

const myAge = document.querySelector(".age");
const years = parseInt(myAge.innerHTML);
const daysPerYear = 365;
const hoursPerDay = 24;
const totalHours = years * daysPerYear * hoursPerDay;

const hoursLived = document.querySelector(".hours-lived");
hoursLived.innerHTML = totalHours;
