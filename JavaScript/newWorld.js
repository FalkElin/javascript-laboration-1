//anropar funktioonen main2
window.onload = main2


/**
 * an array that declares right answers to function solutionForm()
 */
const RightAnswer = ["luna", "Luna"]

/**
 * Calls function addEventListeners() with onclick events and more 
 */
function main2(){
    addEventListeners();

}

/**
 * Sets onclick events and to specified html elements by getting their ID:s 
 */
function addEventListeners() {

        const btn = document.getElementById("btn");
        btn.onclick = solutionForm
    
        const bollen = document.getElementById("bollen");
        bollen.onclick = showForm;
        
        const musicButton = document.getElementById("music-button")
        musicButton.onclick = playMusic;

        const rihanna = document.getElementById("rihanna")
        rihanna.onclick = showRihannaText;

        const balto = document.getElementById("balto")
        balto.onclick = showBaltoText;

        const albert = document.getElementById("albert")
        albert.onclick = showAlbertText;

        const moses = document.getElementById("moses")
        moses.onclick = showMosesText;
    
        const luna = document.getElementById("luna")
        luna.onclick = showLunaText;
        
        const hintButton = document.getElementById("help-button")
        hintButton.onclick = showHelpText;
}

/**
 * Shows solution form on click one and hides it on click two with an if function
 * @param {HTMLElement} form - hidden form element from html
 */
function showForm() {
    const form = document.getElementById("solutionForm")
    form.style.display = ((form.style.display!='block') ? 'block' : 'none')
}

/**
 * Controls answer in solution form with help of an array, send out prompt if the answer is wrong and calls new function if the answer is right 
 * @param {any} searchTerm - hidden form element from html
 * @param {string} answer - The answer from the user that gets verified with an array
 */
function solutionForm() {
    const searchTerm = document.getElementById("svar").value;
    let isanswerFound = false;

    for (const answer of RightAnswer){
       if (answer === searchTerm) {
       isanswerFound = true;
       ShowAndHide()
       break;
       }
    }
     
    if (!isanswerFound) {
        alert("Fel, testa igen!")
        AnswerQuestion()
    }
}

/**
 * Plays music with preset volume
 * @param {HTMLAudioElement} audio - audio element with mp3 file 
 */
function playMusic() {
let audio = new Audio("Bilder/mysterymusic.mp3");
audio.play();
audio.volume= 0.2;
}

/**
 * Shows hidden html div in fullscreen and hides all main elements
 * @param {HTMLElement} hide - takes out the main elment with queryselector and hides it's visibility 
 * @param {HTMLElement} show - takes out the hidden div with ID:selector and makes it visible
 */
function ShowAndHide(){
    const hide = document.querySelector("main");
    const show = document.getElementById("kittendiv");
    hide.style.visibility = "hidden";
    show.style.visibility = "visible";  
}


/**
 * Shows and hides hidden div on click 
 * @param {HTMLElement} baltotext - takes out div element with ID:selector and makes it visible 
 */
function showBaltoText(){
    const baltoText = document.getElementById("baltotext")
    baltoText.style.display = ((baltoText.style.display!='block') ? 'block' : 'none')
}

/**
 * Shows and hides hidden div on click 
 * @param {HTMLElement} rihannatext - takes out div element with ID:selector and makes it visible 
 */
function showRihannaText(){
    const rihannaText = document.getElementById("rihannatext")
    rihannaText.style.display = ((rihannaText.style.display!='block') ? 'block' : 'none')
}

/**
 * Shows and hides hidden div on click 
 * @param {HTMLElement} alberttext - takes out div element with ID:selector and makes it visible 
 */
function showAlbertText(){
    const albertText = document.getElementById("alberttext");
    albertText.style.display = ((albertText.style.display!='block') ? 'block' : 'none')
}

/**
 * Shows and hides hidden div on click  
 * @param {HTMLElement} mosestext - takes out div element with ID:selector and makes it visible 
 */
function showMosesText(){
    const mosesText = document.getElementById("mosestext");
    mosesText.style.display = ((mosesText.style.display!='block') ? 'block' : 'none')
}

/**
 * Shows and hides hidden div on click 
 * @param {HTMLElement} lunatext - takes out div element with ID:selector and makes it visible 
 */
function showLunaText(){
    const lunaText = document.getElementById("lunatext");
    lunaText.style.display = ((lunaText.style.display!='block') ? 'block' : 'none')
    
}

/**
 * Shows and hides hidden div on click 
 * @param {HTMLElement} helptext - takes out div element with ID:selector and makes it visible 
 */
function showHelpText() {
    const helpText = document.getElementById("hinttext")
    helpText.style.display = ((helpText.style.display!='block') ? 'block' : 'none')
}