import { initNavigation } from './features/navigation.js';
import { initMenuCategories } from './features/menuCategories.js';
import { makePhoneCall } from './features/phoneCall.js';
import { openOffers } from './features/carousel.js';
import { initMenuScroll } from './features/menuScroll.js';
import { toggleFooter } from './features/footer.js';
import { initUrlManager } from './features/urlManager.js';

// Initialisation au chargement du DOM
document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initMenuCategories();
    initMenuScroll();
    initUrlManager();
});

// Rendre les fonctions disponibles globalement
window.makePhoneCall = makePhoneCall;
window.openOffers = openOffers;
window.toggleFooter = toggleFooter; 