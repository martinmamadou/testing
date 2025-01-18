document.addEventListener('DOMContentLoaded', function() {
    // Sélection des éléments DOM nécessaires
    const navItems = document.querySelectorAll('nav li');        // Tous les éléments de navigation
    const views = document.querySelectorAll('.view');            // Toutes les vues/pages
    const menuSection = document.querySelector('.menu');         // Section menu spécifique

    // Gestion des clics sur les éléments de navigation
    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();  // Empêche le comportement par défaut des liens
            
            // Mise à jour visuelle de la navigation
            navItems.forEach(nav => nav.classList.remove('active'));  // Retire l'état actif de tous les items
            this.classList.add('active');                            // Ajoute l'état actif à l'item cliqué

            // Fermeture de toutes les sections
            views.forEach(view => view.classList.remove('active'));   // Cache toutes les vues
            menuSection.classList.remove('show');                     // Cache la section menu

            // Logique d'affichage de la section appropriée
            const isMenu = this.querySelector('a.men');              // Vérifie si c'est le bouton menu
            if (isMenu) {
                menuSection.classList.add('show');                    // Affiche la section menu
            } else {
                // Pour les autres sections, trouve et affiche la vue correspondante
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
    // Affichage par défaut de la section Burger
    const defaultSection = document.querySelector('.menu-item.Burger');
    if (defaultSection) {
        defaultSection.classList.add('active');
    }

    // Sélection des éléments du menu
    const buttons = document.querySelectorAll('.menu-btn');         // Boutons de catégories
    const menuItems = document.querySelectorAll('.menu-item');      // Sections de menu

    // Gestion des clics sur les boutons de catégories
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const targetClass = button.getAttribute('data-target');  // Récupère la catégorie ciblée
            
            // Mise à jour visuelle des boutons
            buttons.forEach(btn => btn.classList.remove('active'));  // Désactive tous les boutons
            button.classList.add('active');                         // Active le bouton cliqué

            // Mise à jour de l'affichage des sections
            menuItems.forEach(item => item.classList.remove('active')); // Cache toutes les sections

            // Affiche la section correspondante
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
    
    // Détection du type d'appareil pour adapter le comportement
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        // Sur mobile : lance l'application téléphone
        window.location.href = `tel:${phoneNumber}`;
    } else {
        // Sur desktop : affiche une alerte avec le numéro
        alert(`Appelez-nous au ${phoneNumber}`);
    }
}

  



