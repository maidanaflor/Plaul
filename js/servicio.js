 document.querySelectorAll('.tab-button').forEach(button => {
            button.addEventListener('click', () => {
                // Remover clase active de todos los botones y contenidos
                document.querySelectorAll('.tab-button').forEach(btn => {
                    btn.classList.remove('active');
                });
                document.querySelectorAll('.tab-content').forEach(content => {
                    content.classList.remove('active');
                });
                
                // Agregar clase active al botón clickeado
                button.classList.add('active');
                
                // Mostrar el contenido correspondiente
                const tabId = button.getAttribute('data-tab');
                document.getElementById(tabId).classList.add('active');
            });
        });