const notification = document.querySelector(".notification");
const title = document.querySelector(".title");
const text = document.querySelector(".text");
if (notification.classList.contains("succes")) {
  title.innerHTML = "Correcto";
  text.innerHTML = "Los datos son correctos";
} else if (notification.classList.contains("error")) {
  title.innerHTML = "Error";
  text.innerHTML = "Ha surgido un error";
} else if (notification.classList.contains("warning")) {
  title.innerHTML = "Aviso";
  text.innerHTML = "Tenga cuidado";
}
