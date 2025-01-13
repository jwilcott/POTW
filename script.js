document.addEventListener('DOMContentLoaded', (event) => {
    let count = 0;
    const counterButton = document.getElementById('counterButton');
    const counterDisplay = document.getElementById('counter');

    counterButton.addEventListener('click', () => {
        count++;
        counterDisplay.textContent = count;
    });
});
