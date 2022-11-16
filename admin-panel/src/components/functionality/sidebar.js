let bar = document.getElementById("bar");
let cross = document.getElementById("cross");
let sideBar = document.getElementById("sideBar");


function open() {
    sideBar.style.left = "0px"
}
if (bar) {
    bar.addEventListener("click", open)
}

function close() {
    sideBar.style.left = "-400px"
}
if (cross) {
    cross.addEventListener("click", close)
}