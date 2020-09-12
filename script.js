// console.log("good");

score = 0;
cross = true;

audio = new Audio('music.mp3');
setInterval(() => {
    audio.play();
}, 1000);

document.onkeydown = function (e) {
    // console.log("key word is: ",e.keyCode);
    if (e.keyCode == 38) {
        ninja = document.querySelector('.ninja');
        ninja.classList.add('animateNinja');
        setTimeout(() => {
            ninja.classList.remove('animateNinja');
        }, 700);
    }
    if (e.keyCode == 39) {
        ninja = document.querySelector('.ninja');
        ninjaX = parseInt(window.getComputedStyle(ninja, null).getPropertyValue('left'));
        ninja.style.left = ninjaX + 112 + "px";
    }
    if (e.keyCode == 37) {
        ninja = document.querySelector('.ninja');
        ninjaX = parseInt(window.getComputedStyle(ninja, null).getPropertyValue('left'));
        ninja.style.left = (ninjaX - 112) + "px";
    }
}

setInterval(() => {
    ninja = document.querySelector('.ninja');
    gameOver = document.querySelector('.gameOver');
    obstackle = document.querySelector('.obstackle');
    nx = parseInt(window.getComputedStyle(ninja, null).getPropertyValue('left'));
    ny = parseInt(window.getComputedStyle(ninja, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstackle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstackle, null).getPropertyValue('top'));

    offsetX = Math.abs(nx - ox);
    offsetY = Math.abs(ny - oy);

    if (offsetX < 113 && offsetY < 52) {
        gameOver.style.visibility = 'visible';
        obstackle.classList.remove('animateobs');
        audio.pause();
    }
    else if (offsetX < 145 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        // setTimeout(() => {
        //     anidur = parseInt(window.getComputedStyle(obstackle, null).getPropertyValue('animation-duration'));
        //     newdur = anidur - 0.001;
        //     obstackle.style.animationDuration = newdur + 's';
        // }, 500);

    }
}, 100);

function updateScore(score) {
    scoreCount.innerHTML = "Count: " + score;
}
