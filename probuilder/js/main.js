function updateCharCount() {
    const textarea = document.getElementById('mensaje');
    const charCount = document.getElementById('char-count');
    const maxLength = textarea.getAttribute('maxlength');
    const currentLength = textarea.value.length;
    const remaining = maxLength - currentLength;
    charCount.textContent = `${remaining} caracteres restantes`;

    // Habilitar o deshabilitar el botón de enviar
    toggleSubmitButton();
}

function toggleSubmitButton() {
    const nombre = document.getElementById('nombre').value.trim();
    const correo = document.getElementById('correo').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();
    const btn = document.getElementById('enviar-btn');

    if (nombre === '' || correo === '' || mensaje === '') {
        btn.disabled = true;
        btn.style.backgroundColor = '#555'; // Color de botón deshabilitado
    } else {
        btn.disabled = false;
        btn.style.backgroundColor = 'black'; // Color de botón habilitado
    }
}

function sendMessage() {
    const btn = document.getElementById('enviar-btn');
    btn.textContent = 'Enviado';
    setTimeout(() => {
        btn.textContent = 'Enviar'; // Cambiar de vuelta después de un tiempo
    }, 2000); // 2 segundos antes de restaurar el texto
}

// Añadir event listeners para habilitar/deshabilitar el botón y actualizar el contador de caracteres cuando los campos cambien
document.getElementById('nombre').addEventListener('input', updateCharCount);
document.getElementById('correo').addEventListener('input', updateCharCount);
document.getElementById('mensaje').addEventListener('input', updateCharCount);

// Añadir event listener para el botón de enviar
document.getElementById('enviar-btn').addEventListener('click', sendMessage);

// Inicializa el contador de caracteres al cargar la página
updateCharCount();

