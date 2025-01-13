// ...existing code...

let count = 0;

function updateCountDisplay() {
    console.log(`Current count: ${count}`);
}

function countUp() {
    count++;
    updateCountDisplay();
}

function countDown() {
    count--;
    updateCountDisplay();
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('count-up').addEventListener('click', countUp);
    document.getElementById('count-down').addEventListener('click', countDown);
    updateCountDisplay();
});

function test() {
    console.log("The script is working!!");
}

test();

// ...existing code...
