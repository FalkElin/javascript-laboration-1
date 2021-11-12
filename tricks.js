//anropa vår main funktion när sidan laddat
window.onload = main


const RightAnswers = ["death"]

function main(){
    addEventListeners();
}


function addEventListeners() {
const catFace = document.getElementById("catFace")
catFace.onclick = AnswerQuestion;
document.getElementById("catFace").style.cursor = "pointer";

const bollen = document.getElementById("bollen")
bollen.onclick = showCatText
document.getElementById("bollen").style.cursor = "pointer";
}


function AnswerQuestion() {
    const searchTerm = prompt("If you killed a cat in ancient Egypt, even by accident, what punishment did you face?")
    
    let isanswerFound = false;

    for (const answer of RightAnswers){
       if (answer === searchTerm) {
       isanswerFound = true;
       alert("RIGHT!")
       

       break;
       }
    }

    if (!isanswerFound) {
        alert("WRONG, TRY AGAIN!")
        AnswerQuestion()
    }

}

function showCatText(){
    const text = document.getElementById("CatText")
    text.style.display = "block"; 
    const crazyText = document.getElementById("crazyText")
    crazyText.style.display = "none";
    
}







