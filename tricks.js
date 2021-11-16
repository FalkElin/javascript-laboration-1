
window.onload = main


const RightAnswers = ["4"]

function main(){
    addEventListeners();
}


function addEventListeners() {
const secretDoor = document.getElementById("secretDoor")
secretDoor.onclick = AnswerQuestion;
document.getElementById("secretDoor").style.cursor = "pointer";

const bollen = document.getElementById("bollen")
bollen.onclick = showCatText
document.getElementById("bollen").style.cursor = "pointer";
}


function AnswerQuestion() {
    const searchTerm = prompt("I ett fyrkantigt rum finns en katt i varje hörn av rummet. Framför varje katt finns 3 katter. Hur många katter finns det i rummet? Svara i siffror.")
    
    let isanswerFound = false;

    for (const answer of RightAnswers){
       if (answer === searchTerm) {
       isanswerFound = true;
       alert("Korrekt!")
       break;
       }
    }

    if (!isanswerFound) {
        alert("Fel, testa igen!")
        AnswerQuestion()
    }

}

function showCatText(){
    const text = document.getElementById("CatText")
    text.style.display = "block"; 
    const crazyText = document.getElementById("crazyText")
    crazyText.style.display = "none";
    
}







