window.onload = main2


const RightAnswers = ["balto"]

function main2(){
    addEventListeners();

}


function addEventListeners() {

    const btn = document.querySelector('#btn');
        btn.onclick = solutionForm;
        

}

function solutionForm() {
    const cb = document.querySelector('#accept');
   
    if (cb === 'balto'){
console.log("hej")
    }
}
