
window.onload = main


let RightAnswers = ["3", "tre"]

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
    let searchTerm = prompt("Elin älskar katter och har några som husdjur. Alla utom två är helt vita. Alla utom två är helt svarta. Alla utom två är helt bruna. Hur många katter har Elin?").toLowerCase();
    
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

function showCatText(){
    const text = document.getElementById("CatText")
    text.style.display = "block"; 
    const crazyText = document.getElementById("crazyText")
    crazyText.style.display = "none";
    
}







