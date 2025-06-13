document.addEventListener('DOMContentLoaded', function() {
    // Slider Automático (sin cambios)
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    
    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove('active'));
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
    }
    
    function nextSlide() {
        showSlide(currentSlide + 1);
    }
    
    setInterval(nextSlide, 4000);

    // Contador Animado
    const counters = document.querySelectorAll('.contador-item h3');
    const contadorSection = document.querySelector('.contador');

    // Función para reiniciar contadores a 0
    function resetCounters() {
        counters.forEach(counter => {
            counter.innerText = '0';
        });
    }

    // Función para animar los contadores
    function animateCounters() {
        counters.forEach(counter => {
            const target = parseInt(counter.getAttribute('data-count'));
            let current = parseInt(counter.innerText);
            let speed;
            
            if (target === 250) speed = 70;
            else if (target === 2150) speed = 40;
            else speed = 500;
            
            if (current < target) {
                current += 1;
                counter.innerText = current;
                setTimeout(animateCounters, speed);
            }
        });
    }

    // Observer para reiniciar y animar al hacer scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Si la sección es visible, inicia la animación
                animateCounters();
            } else {
                // Si la sección no es visible, reinicia los contadores
                resetCounters();
            }
        });
    }, { threshold: 0.5 }); // Se activa cuando el 50% de la sección es visible

    if (contadorSection) {
        observer.observe(contadorSection);
    }
});