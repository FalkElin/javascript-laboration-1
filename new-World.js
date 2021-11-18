//anropar funktioonen main2
window.onload = main2

//Svar på gåtan 
const RightAnswer = ["luna", "Luna"]

//anropar funktion
function main2(){
    addEventListeners();

}

//hämtar objekt och tilldelar funktioner
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
//Visar och stänger svarsformuläret
function showForm() {
    const form = document.getElementById("solutionForm")
    form.style.display = ((form.style.display!='block') ? 'block' : 'none')

}

//kontrollerar svaret i svarsformuläret med hjälp av en array, skickar ut prompt om svaret är fel och anropar ny funktion om svaret är rätt
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

//spelar musik vis knapptryckning
function playMusic() {
let audio = new Audio("Bilder/mysterymusic.mp3");
audio.play();
audio.volume= 0.2;
}

//Visar kattunge med text om gåtan är löst
function ShowAndHide(){
    const hide = document.querySelector("main");
    const show = document.getElementById("kittendiv");
    hide.style.visibility = "hidden";
    show.style.visibility = "visible";  
     
}

//Visar baltos pratbubbla
function showBaltoText(){
    const baltoText = document.getElementById("baltotext")
    baltoText.style.display = ((baltoText.style.display!='block') ? 'block' : 'none')
}

function showRihannaText(){
    const rihannaText = document.getElementById("rihannatext")
    rihannaText.style.display = ((rihannaText.style.display!='block') ? 'block' : 'none')
}

function showAlbertText(){
    const albertText = document.getElementById("alberttext");
    albertText.style.display = ((albertText.style.display!='block') ? 'block' : 'none')
}

function showMosesText(){
    const mosesText = document.getElementById("mosestext");
    mosesText.style.display = ((mosesText.style.display!='block') ? 'block' : 'none')
}


function showLunaText(){
    const lunaText = document.getElementById("lunatext");
    lunaText.style.display = ((lunaText.style.display!='block') ? 'block' : 'none')
    
}

function showHelpText() {
    const helpText = document.getElementById("hinttext")
    helpText.style.display = ((helpText.style.display!='block') ? 'block' : 'none')
}