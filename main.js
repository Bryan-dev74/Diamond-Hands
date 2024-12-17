// Language Switch Functionality
const langSwitch = document.querySelector('#langSwitch');
let currentLang = 'en';

const translations = {
    en: {
        title: 'A Cryptocurrency for Serious People',
        subtitle: 'Designed for those with Diamond Hands.',
        buyNow: 'Buy Now',
        learnMore: 'Learn More',
        topBanner: 'A currency created for people who hold strong – Diamond Hands'
    },
    es: {
        title: 'Una Criptomoneda para Gente Seria',
        subtitle: 'Diseñada para aquellos con Manos de Diamante.',
        buyNow: 'Comprar',
        learnMore: 'Más Información',
        topBanner: 'Una moneda creada para personas que mantienen su posición – Manos de Diamante'
    }
};

langSwitch.addEventListener('change', () => {
    currentLang = langSwitch.checked ? 'es' : 'en';
    updateLanguage();
});

function updateLanguage() {
    document.querySelector('.hero h1').textContent = translations[currentLang].title;
    document.querySelector('.hero p').textContent = translations[currentLang].subtitle;
    document.querySelector('.primary-btn').textContent = translations[currentLang].buyNow;
    document.querySelector('.secondary-btn').textContent = translations[currentLang].learnMore;
    document.querySelector('.top-banner p').textContent = translations[currentLang].topBanner;
    document.querySelector('.buy-button').textContent = translations[currentLang].buyNow;
}

// Close Banner Functionality
const closeBanner = document.querySelector('.close-banner');
const topBanner = document.querySelector('.top-banner');

closeBanner.addEventListener('click', () => {
    topBanner.style.display = 'none';
});

// Smooth Scroll Functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer para las animaciones de fade in
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Dejar de observar una vez que se active
        }
    });
}, observerOptions);

// Observar todos los elementos de la galería
document.querySelectorAll('.gallery-item').forEach(item => {
    observer.observe(item);
});

// Add loading animation to gallery images
window.addEventListener('load', () => {
    const galleryItems = document.querySelectorAll('.gallery-item');
    galleryItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.opacity = '1';
        }, index * 200);
    });
});

// Modal functionality
const modal = document.createElement('div');
modal.classList.add('modal');
const modalImg = document.createElement('img');
modal.appendChild(modalImg);
document.body.appendChild(modal);

const galleryItems = document.querySelectorAll('.gallery-item img');

galleryItems.forEach(item => {
    item.addEventListener('click', () => {
        modalImg.src = item.src;
        modal.style.display = 'flex';
    });
});

modal.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Mobile Menu Functionality
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const body = document.body;

menuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    menuToggle.classList.toggle('menu-open');
    body.classList.toggle('menu-open');
});

// Cerrar el menú al hacer clic en un enlace
const mobileLinks = document.querySelectorAll('.mobile-menu a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        menuToggle.classList.remove('menu-open');
        body.classList.remove('menu-open');
    });
});

// Animación de sacudida para iconos sociales
function setupSocialIconsAnimation() {
    const socialIcons = document.querySelectorAll('.social-link i');
    let currentIndex = 0;

    function shakeIcon() {
        // Remover la clase shake de todos los iconos
        socialIcons.forEach(icon => icon.classList.remove('shake'));
        
        // Agregar la clase shake al icono actual
        socialIcons[currentIndex].classList.add('shake');
        
        // Actualizar el índice para el próximo icono
        currentIndex = (currentIndex + 1) % socialIcons.length;
    }

    // Iniciar la animación cada 3 segundos
    setInterval(shakeIcon, 3000);
}

// Iniciar la animación cuando la página esté cargada
document.addEventListener('DOMContentLoaded', setupSocialIconsAnimation);

// Preloader
document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.querySelector('.preloader');
    
    // Asegurarse de que la animación de escritura termine
    setTimeout(() => {
        preloader.classList.add('fade-out');
        // Remover el preloader del DOM después de la animación
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500);
    }, 4000); // 4 segundos para que termine la animación de escritura
});
