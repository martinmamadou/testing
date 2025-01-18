// Attendre que le DOM soit chargé avant d'exécuter le code
document.addEventListener('DOMContentLoaded', function() {
    // Sélection des éléments DOM nécessaires pour la navigation
    const navItems = document.querySelectorAll('nav li');        // Items de navigation
    const views = document.querySelectorAll('.view');            // Différentes vues/pages
    const menuSection = document.querySelector('.menu');         // Section menu spécifique

    // Gestion des clics sur les éléments de navigation
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();  // Empêche le comportement par défaut des liens
            
            // Mise à jour de l'état actif dans la navigation
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');

            // Cache toutes les sections
            views.forEach(view => view.classList.remove('active'));
            menuSection.classList.remove('show');

            // Logique d'affichage de la section appropriée
            const isMenu = this.querySelector('a.men');
            if (isMenu) {
                menuSection.classList.add('show');  // Affiche le menu si c'est le bouton menu
            } else {
                // Sinon, trouve et affiche la vue correspondante
                const targetClass = this.querySelector('a').textContent.trim();
                const targetView = document.querySelector(`.view.${targetClass}`);
                if (targetView) {
                    targetView.classList.add('active');
                }
            }
        });
    });
});

// Gestion du menu de restauration
document.addEventListener('DOMContentLoaded', function() {
    // Configuration initiale : affichage de la section Burger par défaut
    const defaultSection = document.querySelector('.menu-item.Burger');
    if (defaultSection) {
        defaultSection.classList.add('active');
    }

    // Sélection des éléments pour la navigation du menu
    const buttons = document.querySelectorAll('.menu-btn');
    const menuItems = document.querySelectorAll('.menu-item');

    // Gestion des clics sur les boutons de catégories
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const targetClass = button.getAttribute('data-target');
            
            // Mise à jour des états actifs des boutons
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Mise à jour de l'affichage des sections
            menuItems.forEach(item => item.classList.remove('active'));
            const targetSection = document.querySelector(`.menu-item.${targetClass}`);
            if (targetSection) {
                targetSection.classList.add('active');
            }
        });
    });
});

// Fonction de gestion des appels téléphoniques
function makePhoneCall(event) {
    // Empêche la navigation et la propagation de l'événement
    event.preventDefault();
    event.stopPropagation();
    
    const phoneNumber = '+33612345678';
    
    // Détection du type d'appareil et comportement adapté
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        // Sur mobile : lance l'application téléphone
        window.location.href = `tel:${phoneNumber}`;
    } else {
        // Sur desktop : affiche une alerte avec le numéro
        alert(`Appelez-nous au ${phoneNumber}`);
    }
}

// Gestion du carrousel des offres
function openOffers() {
    // Ouvre le carrousel et initialise son contenu
    const carousel = document.querySelector('.offers-carousel');
    carousel.classList.add('active');
    initCarousel();
}

function initCarousel() {
    // Sélection des éléments du carrousel
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelector('.carousel-dots');
    let currentSlide = 0;

    // Création des points de navigation
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dots.appendChild(dot);
    });

    // Initialisation : affiche la première slide
    slides[0].classList.add('active');

    // Configuration des boutons de navigation
    document.querySelector('.carousel-btn.prev').addEventListener('click', prevSlide);
    document.querySelector('.carousel-btn.next').addEventListener('click', nextSlide);

    // Fermeture du carrousel en cliquant en dehors
    document.querySelector('.offers-carousel').addEventListener('click', (e) => {
        if (e.target.classList.contains('offers-carousel')) {
            e.target.classList.remove('active');
            dots.innerHTML = '';
        }
    });

    // Fonction de navigation vers une slide spécifique
    function goToSlide(index) {
        // Retire l'état actif de la slide courante
        slides[currentSlide].classList.remove('active');
        document.querySelectorAll('.dot')[currentSlide].classList.remove('active');
        
        // Animation de transition
        slides[currentSlide].classList.add('prev');
        setTimeout(() => {
            slides[currentSlide].classList.remove('prev');
        }, 500);

        // Active la nouvelle slide
        currentSlide = index;
        slides[currentSlide].classList.add('active');
        document.querySelectorAll('.dot')[currentSlide].classList.add('active');
    }

    // Fonctions de navigation
    function nextSlide() {
        goToSlide((currentSlide + 1) % slides.length);
    }

    function prevSlide() {
        goToSlide((currentSlide - 1 + slides.length) % slides.length);
    }
}

  



