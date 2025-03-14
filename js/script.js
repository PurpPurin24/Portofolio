const dynamicText = document.querySelector('.dynamic-text');
const textArray = ['Backend Engineer.', 'Beginner.', 'Pemula.', 'Air Tenang Menghanyutkan'];
let textIndex = 0;
let charIndex = 0;
let typing = true;

function typeEffect() {
    if (typing) {
        if (charIndex < textArray[textIndex].length) {
            dynamicText.textContent += textArray[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(typeEffect, 100);
        } else {
            typing = false;
            setTimeout(typeEffect, 1000);
        }
    } else {
        if (charIndex > 0) {
            dynamicText.textContent = textArray[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(typeEffect, 50);
        } else {
            typing = true;
            textIndex = (textIndex + 1) % textArray.length;
            setTimeout(typeEffect, 500);
        }
    }
}

typeEffect();
