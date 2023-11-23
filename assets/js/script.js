
//

const compartirIcon = document.getElementById('compartirIcon');

compartirIcon.addEventListener('click', function (event) {
    event.preventDefault();
    compartirPorSMS();
});

function compartirPorSMS() {
    const url = window.location.href;
    const mensaje = 'Echa un vistazo a este enlace: ' + url;

    if ('share' in navigator) {
        // Si el navegador admite la API de Web Share, úsala
        navigator.share({
            title: document.title,
            text: mensaje,
            url: url,
        })
        .then(() => console.log('Enlace compartido con éxito'))
        .catch(error => console.error('Error al compartir: ', error));
    } else {
        // Si el navegador no admite la API de Web Share, abre un enlace de SMS
        window.open(`sms:?body=${encodeURIComponent(mensaje)}`, '_blank');
    }
}


//mmm
function copiarAlPortapapeles() {
    // Crea un elemento de entrada de texto temporal
    const input = document.createElement('input');
    input.setAttribute('value', 'https://priscillabuhrle.github.io/PAU_Disenos/');
    
    // Agrega el elemento de entrada de texto al documento
    document.body.appendChild(input);
    
    // Selecciona el contenido del elemento de entrada de texto
    input.select();
    
    // Copia el contenido seleccionado al portapapeles
    document.execCommand('copy');
    
    // Elimina el elemento de entrada de texto temporal
    document.body.removeChild(input);

    // Cambia el texto del span para indicar que se ha copiado
    const favoritoLabel = document.getElementById('favoritoLabel');
    favoritoLabel.textContent = 'Link Copiado';
    
    // Cambia el icono para proporcionar retroalimentación visual
    favoritoIcon.classList.remove('fa-regular', 'fa-copy');
    favoritoIcon.classList.add('fa-solid', 'fa-check');
    
    // Restaura el estado original después de un tiempo
    setTimeout(function () {
        favoritoLabel.textContent = 'Copiar Link';
        favoritoIcon.classList.remove('fa-solid', 'fa-check');
        favoritoIcon.classList.add('fa-regular', 'fa-copy');
    }, 3000); // Cambios de vuelta después de 2 segundos
}

favoritoIcon.addEventListener('click', copiarAlPortapapeles);

// animacion logo
// Obtiene la referencia a la imagen por su ID

const logoImage = document.getElementById('logoImage');

// Función para iniciar la animación
function iniciarAnimacion() {
    logoImage.classList.add('animacion');
}

// Agrega un controlador de eventos al cargar la página
window.addEventListener('load', iniciarAnimacion);

// Agrega un controlador de eventos al hacer clic en la imagen
logoImage.addEventListener('click', () => {
    // Reinicia la animación al hacer clic
    logoImage.classList.remove('animacion');
    void logoImage.offsetWidth; // Esto fuerza un reinicio de la animación
    logoImage.classList.add('animacion');
});


//json - manifesto para instalacion
let deferredPrompt;

        window.addEventListener('beforeinstallprompt', (event) => {
            // Previene que el navegador muestre su propio mensaje de instalación
            event.preventDefault();
            // Guarda el evento para mostrar el banner cuando sea apropiado
            deferredPrompt = event;
        });

        // Asocia el evento de clic al botón de instalación
        document.getElementById('install-button').addEventListener('click', () => {
            // Llama directamente al método prompt() para mostrar el diálogo de instalación
            deferredPrompt.prompt();

            // Espera a que el usuario haga una elección
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === 'accepted') {
                    console.log('Usuario aceptó la instalación');
                } else {
                    console.log('Usuario rechazó la instalación');
                }
                // Limpia el evento
                deferredPrompt = null;
                // Oculta el banner después de la interacción
                document.getElementById('install-banner').style.display = 'none';
            });
        });

