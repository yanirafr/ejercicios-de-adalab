const me = "Yanira";
const who = document.querySelector(".user");
const user = who.innerHTML;
const answer = document.querySelector(".answer");
if (user === me) {
  answer.innerHTML = `Bienvenida ${me}`;
} else {
  answer.innerHTML = `Lo siento pero el usuario que has introducido no está registrado`;
}
