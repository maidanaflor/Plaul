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