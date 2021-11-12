//anropa vår main funktion när sidan laddat
window.onload = main


const RightAnswers = ["mus", "råtta"]

function main(){
    addEventListeners();
}


function addEventListeners() {
const catFace = document.getElementById("catFace")
catFace.onclick = AnswerQuestion;

const bollen = document.getElementById("bollen")
bollen.onclick = showCatText
}


function AnswerQuestion() {
    const searchTerm = prompt("Gåta")

    let isanswerFound = false;

    for (const answer of RightAnswers){
       if (answer === searchTerm) {
       isanswerFound = true;
       alert("rätt")
       break;
       }
    }

    if (!isanswerFound) {
        alert("fel")
    }

}

function showCatText(){
    const text = document.getElementById("CatText")
    text.style.display = "block"; 
    const crazyText = document.getElementById("crazyText")
    crazyText.style.display = "none";
    
}







