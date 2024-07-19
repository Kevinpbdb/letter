document.getElementById('toggle-envelope').addEventListener('click', function() {
    const envelope = document.querySelector('.envelope');
    const button = document.getElementById('toggle-envelope');
    const heartContainer = document.getElementById('hearts-container');
    const video = document.querySelector('.video');

    if (envelope.classList.contains('open')) {
        // Si el sobre está abierto, ciérralo y cambia el texto del botón
        envelope.classList.remove('open');
        button.textContent = 'Abrir Sobre';
        
        // Detiene el video
        video.pause();
        video.currentTime = 0;

        // Limpia los corazones
        heartContainer.innerHTML = '';
    } else {
        // Si el sobre está cerrado, ábrelo y cambia el texto del botón
        envelope.classList.add('open');
        button.textContent = 'Cerrar Sobre';

        // Reproduce el video
        video.play();
        

        // Crea y muestra los corazones
        for (let i = 0; i < 40; i++) { // Ajusta el número de corazones según prefieras
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.innerText = '💚'; // Emoji del corazón

            // Posiciona los corazones dentro del contenedor .envelope
            const left = Math.random() * 100; // Posición horizontal en porcentaje
            const top = Math.random() * 100; // Posición vertical en porcentaje

            heart.style.left = left + '%'; // Posición horizontal
            heart.style.top = top + '%'; // Posición vertical

            heartContainer.appendChild(heart);

            // Inicia la animación
            setTimeout(() => {
                heart.classList.add('show-heart');
            }, 0);

            // Limpia después de la animación
            setTimeout(() => {
                heart.remove();
            }, 20000); // Tiempo que coincide con la duración de la animación
        }
    }
});