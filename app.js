const container = document.querySelector('.container');
const text = document.querySelector('#text');

const totalTime = 7500;
const breathTime = (totalTime/5) * 2;
const holdTime = totalTime / 5;

function breathAnimation(){
    text.innerHTML = 'Inhale!'
    container.className = 'container grow'

    setTimeout(() =>{
        text.innerText = 'Hold'

    }, breathTime)
}