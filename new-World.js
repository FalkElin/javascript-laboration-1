window.onload = main2


const RightAnswer = ["balto"]

function main2(){
    addEventListeners();

}


function addEventListeners() {

        const btn = document.getElementById("btn");
        btn.onclick = solutionForm
    
        const bollen = document.getElementById("bollen");
        bollen.onclick = showForm;
        
        const musicButton = document.getElementById("music-button")
        musicButton.onclick = playMusic;

}

function showForm() {
    const form = document.getElementById("solutionForm")
    if (form.style.display === "none") {
        form.style.display = "block";
      } else {
        form.style.display = "none";
      }

}


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



function showKitten() { 
    const kitten = document.getElementById("kitten")
    kitten.style.display = "block"; 
}

function playMusic() {
let audio = new Audio("Bilder/narnia-music.mp3");
audio.play();
}


function ShowAndHide(){
    const hide = document.querySelector("main");
    const show = document.getElementById("kittendiv");
    hide.style.visibility = "hidden";
    show.style.visibility = "visible";  
     
}
