
window.onload = main

/**
 * an array that declares right answers to function AnswerQuestion()
 */
let RightAnswers = ["katt", "Katt", "katter", "Katter"]

/**
 * Calls function addEventListeners() with onclick events and more 
 */
function main(){
    addEventListeners();
}

/**
 * Sets onclick events to specified html elements by getting their ID:s 
 */
function addEventListeners() {
const secretDoor = document.getElementById("secretDoor")
secretDoor.onclick = AnswerQuestion;
document.getElementById("secretDoor").style.cursor = "pointer";

const bollen = document.getElementById("bollen")
bollen.onclick = showCatText
document.getElementById("bollen").style.cursor = "pointer";

}

/**
 * Calls a prompt with a question that must be answered right to get next page
 * @param {string} searchTerm - Prompt window with question 
 * @param {string} answer - The answer from the user that gets verified with an array
 */
function AnswerQuestion() {
    let searchTerm = prompt("Vilket är det bästa djuret som finns?").toLowerCase();
    
    let isanswerFound = false;

    for (const answer of RightAnswers){
       if (answer === searchTerm) {
       isanswerFound = true;
       break;
       }
    }
    if (!isanswerFound) {
        alert("Fel, testa igen!")
        AnswerQuestion()
    }

}

/**
 * Shows grey cats text on click and hides the first infotext
 * @param {HTMLElement} text - The hidden text from html
 * @param {HTMLElement} crazytext - The displayed text that gets hidden
 */
function showCatText(){
    const text = document.getElementById("CatText")
    text.style.display = "block"; 
    const crazyText = document.getElementById("crazyText")
    crazyText.style.display = "none";
    
}







