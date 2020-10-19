const input = document.querySelector(".name");
const write = document.querySelector(".write");

function getName () {
    
    write.innerHTML = input.value;

    const name = localStorage.setItem("name", input.value);

}

input.addEventListener("keyup", getName);

function reset () {

    const resetName = localStorage.getItem("name");

    write.innerHTML = resetName;

}

reset();