// Seleccionamos elementos del DOM
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalVideo = document.getElementById('modal-video');
const modalVideoSource = document.getElementById('modal-video-source');
const modalDescription = document.getElementById('modal-description');
const playSoundButton = document.getElementById('play-sound');
const closeButton = document.querySelector('.close');

const animalData = {
    cat: {
        title: 'Curiosidades de los Gatos',
        video: 'videos/video gatos.mp4',
        description: 'El gato es un felino doméstico conocido por su agilidad, curiosidad y comportamiento independiente.',
        sound: 'Sound/cat.mp3'
    },
    dog: {
        title: 'Curiosidades de los Perros',
        video: 'videos/video perros.mp4',
        description: 'El perro es un fiel compañero, leal y protector, reconocido por su inteligencia y habilidades sociales.',
        sound: 'Sound/perro.mp3'
    },
    bird: {
        title: 'Curiosidades de las Aves',
        video: 'videos/video aves.mp4',
        description: 'Las aves son criaturas voladoras con plumaje colorido, conocidas por su canto melodioso y habilidad para migrar largas distancias.',
        sound: 'Sound/birds.mp3'
    },
    penguin: {
        title: 'Curiosidades de los Pingüinos',
        video: 'videos/video pinguinos.mp4',
        description: 'El pingüino es un ave marina no voladora, famosa por su traje natural blanco y negro y su habilidad para nadar en aguas frías.',
        sound: 'Sound/pinguino.mp3'
    },
    elephant: {
        title: 'Curiosidaes de los Elefantes',
        video: 'videos/video elefante.mp4',
        description: 'El elefante es el mamífero terrestre más grande, conocido por su memoria excepcional, inteligencia y trompa multifuncional.',
        sound: 'Sound/elefante.mp3'
    }
};

// Abrir modal con video del animal
document.querySelectorAll('.animal-card').forEach(card => {
    card.addEventListener('click', () => {
        const animalId = card.id;
        const data = animalData[animalId];

        modalTitle.textContent = data.title;
        modalVideoSource.src = data.video;
        modalVideo.load(); // Cargar el nuevo video
        modalDescription.textContent = data.description;
        playSoundButton.onclick = () => playSound(data.sound);

        modal.style.display = 'block';
    });
});

// Cerrar modal
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
    modalVideo.pause(); // Pausar el video al cerrar el modal
});

// Función para reproducir sonido
function playSound(soundFile) {
    const audio = new Audio(soundFile);
    audio.play();
}

// Cerrar el modal al hacer clic fuera del contenido
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
        modalVideo.pause(); // Pausar el video al cerrar el modal
    }
});

document.querySelector('.navbar-toggle').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active');
});
