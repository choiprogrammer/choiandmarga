const noButton = document.querySelector('.no-button');
const yesButton = document.querySelector('.yes-button');
const backgroundMusic = document.getElementById('background-music');

noButton.addEventListener('mouseover', () => {
    const offsetX = Math.random() * 200 - 100;
    const offsetY = Math.random() * 200 - 100;
    noButton.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
});

yesButton.addEventListener('click', () => {
    backgroundMusic.play();
});

window.addEventListener('load', function() {
document.getElementById('background-music').play();
});

document.querySelector('.yes-button').addEventListener('click', function() {
document.body.style.transition = 'all 2s';
document.body.style.transform = 'translateY(100vh)';
setTimeout(function() {
    document.body.innerHTML = '<h1 style="text-align: center; margin-top: 50vh;">I LOVE YOU BUNKY!</h1>';
}, 2000);
});