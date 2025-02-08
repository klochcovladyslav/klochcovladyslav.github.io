let dino = document.querySelector('.dino');
let game = document.querySelector('.game');
let cactus = document.querySelector('.cactus');

function jumpFunction() {
    dino.classList.add('jump');
    setTimeout(() => {
        dino.classList.remove('jump');
    }, 600);
}

window.addEventListener('click', function () { jumpFunction(); })
window.addEventListener('keydown', function (event) {
    if (event.code == 'Space' || event.code == 'ArrowUp') { jumpFunction(); }
    else if (event.code == 'KeyW') { alert('Не туди тиснеш'); }
})


let pScore = document.querySelector('.p-score');
let pRecord = document.querySelector('.p-record');

let t = 0;
let record = 0;
let time = 0;

if (localStorage.getItem('recordes') != null) {
    record = localStorage.getItem('recordes');
    pRecord.innerHTML = record;
}

function finish() {
    t++;
    if (t % 30 == 0) {
        time++;
    }
    pScore.innerHTML = time;

    let x = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'));
    let y = parseInt(window.getComputedStyle(dino).getPropertyValue('top'));


    if (x < 130 && x > 100 && y > 110) {
        alert("Ну всьо, приїхали!");
        if (time > record) {
            record = time;
            pRecord.innerHTML = record;
            localStorage.setItem('recordes', record);
        }
        t = time = 0;
    }
}






setInterval(() => {
    finish()
}, 10);




//     console.log(event);
// }) window.location.reload();

