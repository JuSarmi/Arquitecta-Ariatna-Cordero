document.addEventListener('DOMContentLoaded', function() {
    // 1. Comprobar si el usuario ya aceptó las cookies
    if (localStorage.getItem('cookies-aceptadas') === 'true') {
        // Si ya las aceptó, no hacemos nada.
        return;
    }

    // 2. Si no las ha aceptado, creamos el HTML del banner
    const bannerHTML = `
        <div id="cookie-banner">
            <p>
                Utilizamos cookies para mejorar tu experiencia en nuestro sitio web. Al continuar, aceptas nuestro uso de cookies. Puedes obtener más información en nuestra 
                <a href="/politica-cookies/privacy.html">Política de Cookies</a>.
            </p>
            <div class="buttons">
                <button id="accept-cookies-btn">Aceptar</button>
            </div>
        </div>
    `;

    // 3. Añadimos el banner al cuerpo del documento
    document.body.innerHTML += bannerHTML;

    // 4. Configuramos el evento para el botón de aceptar
    const acceptButton = document.getElementById('accept-cookies-btn');
    if (acceptButton) {
        acceptButton.addEventListener('click', function() {
            // Guardamos la preferencia en el almacenamiento local del navegador
            localStorage.setItem('cookies-aceptadas', 'true');
            
            // Ocultamos el banner
            const bannerElement = document.getElementById('cookie-banner');
            if (bannerElement) {
                bannerElement.style.display = 'none';
            }
        });
    }
});