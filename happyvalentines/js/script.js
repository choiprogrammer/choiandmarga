document.addEventListener('DOMContentLoaded', () => {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    const backgroundMusic = document.getElementById('background-music');

    noButton.addEventListener('mouseover', () => {
        const yesButtonRect = yesButton.getBoundingClientRect();
        const maxX = yesButtonRect.right + 200;
        const maxY = yesButtonRect.bottom + 200;
        const minX = yesButtonRect.left - 200;
        const minY = yesButtonRect.top - 200;

        let newX = Math.random() * (maxX - minX) + minX;
        let newY = Math.random() * (maxY - minY) + minY;

        // Ensure the "No" button does not overlap with the "Yes" button
        if (newX < yesButtonRect.right && newX + noButton.offsetWidth > yesButtonRect.left) {
            newX = yesButtonRect.right + 10;
        }
        if (newY < yesButtonRect.bottom && newY + noButton.offsetHeight > yesButtonRect.top) {
            newY = yesButtonRect.bottom + 10;
        }

        noButton.style.position = 'absolute';
        noButton.style.left = `${newX}px`;
        noButton.style.top = `${newY}px`;
    });

    yesButton.addEventListener('click', () => {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.textContent = 'I LOVE YOU SO MUCH BUNKY!!!';
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.style.opacity = '0';
        }, 5000);
    });

    backgroundMusic.play();
});