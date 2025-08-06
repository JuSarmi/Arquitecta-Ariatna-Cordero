document.addEventListener('DOMContentLoaded', function() {
  // 1. Comprobar si el usuario ya aceptó las cookies
  if (localStorage.getItem('cookies-aceptadas') === 'true') {
    // Si ya las aceptó, no hacemos nada.
    return;
  }

  // 2. Si no las ha aceptado, creamos el elemento del banner
  const banner = document.createElement('div');
  banner.id = 'cookie-banner';
  banner.innerHTML = `
    <p>
      Utilizamos cookies para mejorar tu experiencia en nuestro sitio web. Al continuar, aceptas nuestro uso de cookies. Puedes obtener más información en nuestra 
      <a href="politica-cookies/privacy.html" target="_blank" rel="noopener">Política de Cookies</a>.
    </p>
    <div class="buttons">
      <button id="accept-cookies-btn">Aceptar</button>
    </div>
  `;

  // 3. Añadimos el banner al cuerpo del documento de forma segura
  document.body.appendChild(banner);

  // 4. Configuramos el evento para el botón de aceptar
  const acceptButton = document.getElementById('accept-cookies-btn');
  if (acceptButton) {
    acceptButton.addEventListener('click', function() {
      // Guardamos la preferencia en el almacenamiento local del navegador
      localStorage.setItem('cookies-aceptadas', 'true');
      
      // Ocultamos el banner con una transición suave
      if (banner) {
        banner.style.opacity = '0';
        banner.style.visibility = 'hidden';
        // Opcional: eliminarlo del DOM después de la animación
        setTimeout(() => {
          banner.remove();
        }, 300); // 300ms, debe coincidir con la transición CSS si la añades
      }
    });
  }
});