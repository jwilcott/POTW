import * as THREE from 'three';

function init() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const geometry = new THREE.BoxGeometry();
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    camera.position.z = 5;

    function animate() {
        requestAnimationFrame(animate);
        cube.rotation.x += 0.01;
        cube.rotation.y += 0.01;
        renderer.render(scene, camera);
    }

    animate();
}

const pets = [
    { name: 'Billy', score: 0 },
    { name: 'Bobby', score: 0 }
];

function updateScore(index, delta) {
    pets[index].score += delta;
    document.getElementById(`score-${index}`).textContent = pets[index].score;
}

function createPetElement(pet, index) {
    const container = document.createElement('div');
    container.className = 'pet-container';

    const name = document.createElement('div');
    name.className = 'pet-name';
    name.textContent = pet.name;

    const score = document.createElement('div');
    score.className = 'pet-score';
    score.id = `score-${index}`;
    score.textContent = pet.score;

    const plusButton = document.createElement('button');
    plusButton.textContent = '+';
    plusButton.onclick = () => updateScore(index, 1);

    const minusButton = document.createElement('button');
    minusButton.textContent = '-';
    minusButton.onclick = () => updateScore(index, -1);

    container.appendChild(name);
    container.appendChild(minusButton);
    container.appendChild(score);
    container.appendChild(plusButton);

    document.body.appendChild(container);
}

window.onload = () => {
    init();
    pets.forEach((pet, index) => createPetElement(pet, index));
};
