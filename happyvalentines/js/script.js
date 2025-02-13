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