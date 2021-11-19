window.onload = main3

/**
 * Calls function addEventListeners() with onclick events and more 
 */
function main3(){
    addEventListeners();

}

/**
 * Sets onclick events and cursor styling to specified html elements by getting their ID:s 
 */
function addEventListeners() {
const orangeDryck = document.getElementById("orange")
orangeDryck.onclick = showErrorPicture;
}

/**
 * Shows error picture elemnt that has display hidden in html by blocking the display declaration 
 * @param {HTMLElement} error - hidden picture element from html
 */
function showErrorPicture() {
    const error = document.getElementById("error")
    error.style.display = "block"
}