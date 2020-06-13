const container = document.querySelector('.container');
const text = document.querySelector('#text');

const totalTime = 7500;
const breathTime = (totalTime/5) * 2;
const holdTime = totalTime / 5;

breathAnimation()

function breathAnimation(){
    text.innerHTML = 'Inhale!'
    container.className = 'container grow'

    setTimeout(() =>{
        text.innerText = 'Hold'

        setTimeout(() => {
          text.innerText = 'Exhale!'
          container.className = 'container shrink'
        }, holdTime)

    }, breathTime)
}

setInterval(breathAnimation, totalTime)