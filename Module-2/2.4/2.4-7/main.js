function getEl(cssSelector) {
  const returnHTML = document.querySelector(cssSelector);
  return returnHTML;
}

const btnEl = getEl(".btn");

btnEl.innerHTML = `<h1 class="h1class">Probando getEl</h1>
  `;

if (btnEl.i === undefined) {
  console.log("No existe");
} else {
  console.log(btnEl);
}
