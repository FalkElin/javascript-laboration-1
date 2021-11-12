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
bollen.onclick = showCatText;hideCrazyText;
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
    
}

function hideCrazyText(){
    const crazyText = document.getElementById("crazyText")
    crazyText.style.display = "none"; 
    
}



/* exempel nedan
function searchForCar() {
    const searchTerm = prompt("Ange en bilmodell att söka efter");
    
    let isCarBrandFound = false;
    
    for (const carBrand of carBrands) {
        if (carBrand === searchTerm) {
            isCarBrandFound = true;
            console.log('Hittade:', carBrand);
            break;
        }
    }
    
    if (!isCarBrandFound) {
        console.log('Tyvärr hittade vi inte bilmodellen');
    }
}
*/

