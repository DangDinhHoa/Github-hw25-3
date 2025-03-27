document.querySelector('.get-card').addEventListener('click', () => {
    const email = document.querySelector('input[type="email"]').value;
    if (email) {
        alert(`Thank you for signing up with ${email}! Your free card is on the way.`);
    } else {
        alert('Please enter a valid email address.');
    }
});