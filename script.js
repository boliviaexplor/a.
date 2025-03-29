// Funcionalidad del menú hamburguesa
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Resaltar la sección activa en el menú
document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section, .hero');
    const navLinks = document.querySelectorAll('.nav-link');

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
        }
    });
});

// Animación de los botones
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Eliminar la clase 'clicked' de todos los botones
        buttons.forEach(btn => btn.classList.remove('clicked'));
        // Agregar la clase 'clicked' al botón clicado
        button.classList.add('clicked');
        // Eliminar la clase después de 1 segundo (1000ms)
        setTimeout(() => {
            button.classList.remove('clicked');
        }, 1000);
    });
});


// Toggle para cada "Leer más"
document.querySelectorAll('.read-more-btn').forEach(button => {
    button.addEventListener('click', () => {
        const details = button.nextElementSibling;
        const icon = button.querySelector('i');
        
        details.style.maxHeight 
            ? (details.style.maxHeight = null) 
            : (details.style.maxHeight = details.scrollHeight + "px");
        
        icon.classList.toggle('fa-chevron-down');
        icon.classList.toggle('fa-chevron-up');
    });
});


// Formulario de contacto
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simulación de envío (reemplazar con lógica real)
    const successMessage = document.getElementById('successMessage');
    successMessage.style.display = 'block';
    
    // Resetear formulario
    this.reset();
    
    // Ocultar mensaje después de 3 segundos
    setTimeout(() => {
        successMessage.style.display = 'none';
    }, 3000);
});
// Script para el botón volver arriba
document.addEventListener('DOMContentLoaded', function() {
    const backToTop = document.getElementById('back-to-top');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    backToTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});


// Corregir detección de secciones activas
document.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]'); // Detectar todas las secciones con ID
    const navLinks = document.querySelectorAll('.nav-link');

    let currentSection = 'inicio'; // Valor por defecto

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop - sectionHeight * 0.33) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(currentSection)) {
            link.classList.add('active');
        }
    });
});

