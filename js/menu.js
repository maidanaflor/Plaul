function loadMenu() {
  const currentYear = new Date().getFullYear();
  
  const headerHTML = `
      <header>
        <div class="top-bar">
                <div class="contact-info">
                    <span><i class="fas fa-phone"></i> +123 456 789</span>
                    <span><i class="fas fa-envelope"></i> contacto@empresa.com</span>
                </div>
        </div>
        
        <nav>
            <input type="checkbox" id="check">
            <label for="check" class="checkbtn">
                <i class="fas fa-bars"></i>
            </label>
            <a href="index.html" class="enlace">
                <img src="img/plaul.png" alt="Plaul" class="logo">
            </a>

            <ul class="menu">
                <li><a href="index.html">Inicio</a></li>

                <li class="dropdown">
                    <a href="nosotros.html" class="dropdown-btn">Nosotros <i class="dropdown-icon">▼</i></a>
                    <ul class="submenu">
                        <li><a href="#historia">Historia</a></li>
                        <li><a href="#trayectoria">Trayectoria</a></li>
                        <li><a href="#clientes">Clientes</a></li>
                    </ul>
                </li>

                <li class="dropdown">
                    <a href="servicios.html" class="dropdown-btn">Servicios <i class="dropdown-icon">▼</i></a>
                    <ul class="submenu">
                        <li><a href="#servicio1">Mecanizado Pesado</a></li>
                        <li><a href="#servicio2">Maquinas de Transporte</a></li>
                        <li><a href="#servicio3">Calderia</a></li>
                        <li><a href="#servicio4">Equipos Especiales</a></li>
                        <li><a href="#servicio5">Ingenieria y Automatizacion</a></li>
                        <li><a href="#servicio6">Montajes Industriales</a></li>
                    </ul>
                </li>

                <li><a href="contacto.html">Contacto</a></li>
            </ul>

        </nav>
    </header>
  `;

  const footerHTML = `
      <footer>
        <div class="footer-info">
            <div class="footer-widht about">
                <h2>IMP Argentina</h2>
                <p>Plaul es una empresa de amplia trayectoria en el rubro
                    metal mecánico, con un gran desarrollo de la
                    producción en el área de mecanizado pesado,
                    calderería, construcción de máquinas de transporte y
                    automatización de los diferentes procesos productivos.
                    Actualmente provee de insumos, repuestos y servicios a
                    las distintas industrias manufactureras que existen en el
                    mercado local y extranjero.
                    Su filosofía de compromiso y responsabilidad es
                    plasmada a través de los diferentes servicios que brinda
                    y es reconocida por mas de 25 compañías que ya han
                    adoptado a Plaul como un estándar de confianza, a la
                    hora de concretar sus proyectos.</p>
                
                <div class="social-media">
                    <ul>
                        <li>
                            <a href="https://wa.me/5491157580849?text=%20%C2%A1Hola!%20Me%20comunico%20para%20consultar%20por%20los%20servicios.%20Gracias." target="_blank" title="Enviar mensaje por WhatsApp">
                              <i class="fa-brands fa-whatsapp"></i>
                            </a>
                          </li>                          
                        <li><a href="https://www.instagram.com/plaul.imp/"><i class="fa-brands fa-instagram"></i></a></li>
                        <li><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
                    </ul>
                </div>
            </div>
    
            <div class="footer-widht link">
                <h2>Enlaces rapidos</h2>
                <ul>
                    <li><a href="index.html">Inicio</a></li>
                    <li><a href="nosotros.html">Nosotros</a></li>
                    <li><a href="servicios.html">Servicios</a></li>
                    <li><a href="contacto.html">Contacto</a></li>
                </ul>
            </div>
    
            <div class="footer-widht contact">
                <h2>Contacto</h2>
                <ul class="contact-list">
                    <li>
                        <span><i class="bi bi-geo-alt"></i></span>
                        <p>Yatay 3322, Lanus Oeste, Buenos Aires, Argentina</p>
                    </li>
                    <li>
                        <span><i class="bi bi-envelope-at"></i></span>
                        <p>info@plaul.com.ar</p>
                    </li>
                    <li>
                        <span><i class="bi bi-whatsapp"></i></span>
                        <p>Tel./Fax: (54-11) 4218-4621 / 4208-2483</p>
                    </li>
                </ul>
            </div>
        </div>

        <div style="width: 100%; max-width: 1300px; margin: 0 auto; overflow: hidden;">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.837612588015!2d-58.44123982415068!3d-34.68404767292555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccc6d67123433%3A0xf15898785fabd7da!2sDYJ%2C%20Yatay%203321%2C%20B1822%20Lan%C3%BAs%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1748393383913!5m2!1ses-419!2sar" 
              width="100%" 
              height="500" 
              style="border:0; display: block;" 
              allowfullscreen="" 
              loading="lazy" 
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
          </div>

        <div class="copyright-bar">
            <div class="copyright-container">
                <p class="copyright-text">
                    &copy; 2025 Plaul Argentina. Todos los derechos reservados
                </p>
                <div class="separator"></div>
                <a href="https://flormaidana.com.ar/" target="_blank" class="copyright-icon">www.flormaidana.com.ar
                    <i class="bi bi-flower3"></i>
                </a>
            </div>
        </div>

    </footer>
  `;

  document.body.insertAdjacentHTML('afterbegin', headerHTML);
  document.body.insertAdjacentHTML('beforeend', footerHTML);

  const setActiveLink = () => {
      const currentPath = window.location.pathname.split('/').pop() || 'index.html';
      const links = {
          'index.html': 'inicio-link',
          'nosotros.html': 'nosotros-link',
          'servicios.html': 'servicios-link',
          'repuestos.html': 'repuestos-link',
          'contacto.html': 'contacto-link'
      };

      document.querySelectorAll('nav ul li a').forEach(link => {
          link.classList.remove('active');
          if (link.id === links[currentPath]) {
              link.classList.add('active');
          }
      });
  };

  document.addEventListener('DOMContentLoaded', setActiveLink);
  window.addEventListener('popstate', setActiveLink); // Para cambios en la SPA
}

document.addEventListener('DOMContentLoaded', loadMenu);

document.addEventListener('DOMContentLoaded', function() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('nav ul li a');
  
  navLinks.forEach(link => {
      const linkPage = link.getAttribute('href');
      if (linkPage === currentPage || 
         (currentPage === '' && linkPage === 'index.html')) {
          link.classList.add('active');
      }
  });
});

document.querySelectorAll('.dropdown > a').forEach(dropdownBtn => {
  dropdownBtn.addEventListener('click', function(e) {
    // Solo para móviles y solo si es un dropdown
    if (window.innerWidth <= 858 && this.parentElement.classList.contains('dropdown')) {
      e.preventDefault();
      
      const dropdown = this.parentElement;
      const submenu = dropdown.querySelector('.submenu');
      
      // Cerrar otros dropdowns primero
      document.querySelectorAll('.dropdown').forEach(item => {
        if (item !== dropdown) {
          item.classList.remove('active');
          item.querySelector('.submenu').classList.remove('show');
        }
      });
      
      // Toggle (abrir/cerrar) el actual
      dropdown.classList.toggle('active');
      submenu.classList.toggle('show');
    }
  });
});