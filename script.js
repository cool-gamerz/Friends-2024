// Disable right-click context menu
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});

// Disable keyboard shortcuts for developer tools
document.addEventListener('keydown', function(e) {
    if (e.key === 'F12' || 
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) || 
        (e.ctrlKey && e.key === 'U')) {
        e.preventDefault();
    }
});

// Show love popup
function showLove() {
    document.getElementById('popup').classList.remove('hidden');
}

// Close popup
function closePopup() {
    document.getElementById('popup').classList.add('hidden');
}

// Crack cracker
function crackCracker(event) {
    const emojis = ['💖', '💕', '💞', '💓', '💗'];
    const emojiCount = 100; // Number of emojis to create

    for (let i = 0; i < emojiCount; i++) {
        const emoji = document.createElement('div');
        emoji.className = 'emoji';
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.position = 'fixed';
        emoji.style.left = `${Math.random() * window.innerWidth}px`;
        emoji.style.top = `${Math.random() * window.innerHeight}px`;
        document.body.appendChild(emoji);

        // Animate emoji
        const xMove = Math.random() * 200 - 100;
        const yMove = Math.random() * 200 - 100;
        emoji.style.transform = `translate(${xMove}px, ${yMove}px)`;
        emoji.style.transition = 'transform 1s ease-out';

        // Remove emoji after 2 seconds
        setTimeout(() => {
            emoji.remove();
        }, 2000);
    }

    // Mark the touch/pointer with a love emoji
    const pointerEmoji = document.createElement('div');
    pointerEmoji.className = 'emoji';
    pointerEmoji.textContent = '💖';
    pointerEmoji.style.position = 'fixed';
    pointerEmoji.style.left = `${event.clientX}px`;
    pointerEmoji.style.top = `${event.clientY}px`;
    document.body.appendChild(pointerEmoji);

    // Remove pointer emoji after 1 second
    setTimeout(() => {
        pointerEmoji.remove();
    }, 1000);
}

// Add event listener to cracker
document.querySelector('.cracker').addEventListener('click', (event) => {
    crackCracker(event);
});

// Add event listener to show love button
document.querySelector('.show-love').addEventListener('click', showLove);

// Add event listener to close popup button
document.querySelector('.popup button').addEventListener('click', closePopup);

// Check password
function checkPassword() {
    const passwordInput = document.getElementById('password-input').value;
    const correctPasswords = ['2801', '0908', '0701', '1308']; // Array of correct passwords
    const errorMessage = document.getElementById('error-message');

    if (correctPasswords.includes(passwordInput)) {
        document.getElementById('password-popup').style.display = 'none';
        document.getElementById('content').classList.remove('blur');
    } else {
        errorMessage.classList.remove('hidden');
        setTimeout(() => {
            errorMessage.classList.add('hidden');
        }, 2000);
    }
}

// Apply blur effect to content initially
document.getElementById('content').classList.add('blur');
