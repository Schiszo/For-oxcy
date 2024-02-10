const wrapper = document.querySelector('.wrapper');
const question = document.querySelector('.question');
const gif = document.querySelector('.gif');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');
const audio = new Audio('Die For You.mp3');

// Save the initial height of the "Yes" button
const initialHeight = getComputedStyle(yesBtn).height;

// Phrases for the "No" button
const noPhrases = [
    "Are you sure honey?",
    "Really sure???",
    "Honeyyy, pleasee :<",
    "Don't do this",
    "Am gonna kill myself",
    "Please rethink!!! ;-;"
];

let currentPhraseIndex = 0;

noBtn.addEventListener('click', () => {
    const currentSize = parseFloat(getComputedStyle(yesBtn).fontSize);
    const newSize = currentSize * 1.2;

    // Increase the size of the "Yes" button when "No" is clicked
    yesBtn.style.fontSize = newSize + 'px';
    yesBtn.style.width = (parseFloat(getComputedStyle(yesBtn).width) * 1.2) + 'px';
    yesBtn.style.height = (parseFloat(getComputedStyle(yesBtn).height) * 1.2) + 'px';

    // Change the text content of the "noBtn" to the phrases
    if (currentPhraseIndex < noPhrases.length) {
        noBtn.textContent = noPhrases[currentPhraseIndex];
        currentPhraseIndex++;
    } else {
        currentPhraseIndex = 0; // Reset to the first phrase after reaching the end
    }
});

yesBtn.addEventListener('click', () => {
    question.innerHTML = "See you in feb 14(๑>◡<๑)!!!";
    gif.src = "https://media1.tenor.com/m/MPAuMfyyJAMAAAAC/gojo-gojo-satoru.gif";
    audio.play();
    
    // Reset the size of the "Yes" button back to normal
    yesBtn.style.fontSize = '1.2em';
    yesBtn.style.width = '150px';
    yesBtn.style.height = initialHeight; // Set back to the initial height
});

// Initial text content of the "noBtn"
noBtn.textContent = "NO";
