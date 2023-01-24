//your code here

let inputbox=document.getElementById('evaluatedText');
let score=document.getElementById('letterCount');

inputbox.addEventListener('keydown',updateScore);
inputbox.addEventListener('keyup',updateScore);

function updateScore() {
    let length=inputbox.value.length;
    score.innerHTML=length;
}
