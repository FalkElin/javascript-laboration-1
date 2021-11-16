window.onload = main3

function main3(){
    addEventListeners();

}

function addEventListeners() {
const orangeDryck = document.getElementById("orange")
orangeDryck.onclick = showErrorPicture;
}

function showErrorPicture() {
    const error = document.getElementById("error")
    error.style.display = "block"
}