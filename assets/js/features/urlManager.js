export function initUrlManager() {
    // Gérer l'URL immédiatement si le DOM est déjà chargé
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        handleInitialUrl();
    } else {
        // Sinon attendre le chargement du DOM
        document.addEventListener('DOMContentLoaded', handleInitialUrl);
    }

    // Écouter les changements d'URL
    window.addEventListener('popstate', handleInitialUrl);
}

export function updateUrl(viewName) {
    const url = viewName.toLowerCase() === 'home' ? '/' : `/${viewName.toLowerCase()}`;
    history.pushState({ view: viewName }, '', url);
}

function handleInitialUrl() {
    const path = window.location.pathname;
    let targetView = 'Home';

    if (path !== '/') {
        // Nettoyer le chemin (enlever les / et tout ce qui suit un ?)
        targetView = path.split('/').filter(Boolean)[0] || 'home';
        targetView = targetView.split('?')[0];
        targetView = targetView.charAt(0).toUpperCase() + targetView.slice(1).toLowerCase();
    }

    // Trouver et activer la vue correspondante
    const views = document.querySelectorAll('.view');
    const navItems = document.querySelectorAll('nav li');
    const menuSection = document.querySelector('.menu');

    // S'assurer que tous les éléments sont présents
    if (!views.length || !navItems.length || !menuSection) {
        console.warn('Elements not found, retrying in 100ms');
        setTimeout(handleInitialUrl, 100);
        return;
    }

    views.forEach(view => view.classList.remove('active'));
    menuSection.classList.remove('show');
    navItems.forEach(nav => nav.classList.remove('active'));

    if (targetView.toLowerCase() === 'menu') {
        menuSection.classList.add('show');
        navItems.forEach(nav => {
            if (nav.querySelector('a.men')) {
                nav.classList.add('active');
            }
        });
    } else {
        const targetViewElement = document.querySelector(`.view.${targetView}`);
        if (targetViewElement) {
            targetViewElement.classList.add('active');
            navItems.forEach(nav => {
                if (nav.querySelector('a')?.textContent.trim() === targetView) {
                    nav.classList.add('active');
                }
            });
        } else {
            // Si la vue n'existe pas, rediriger vers la home
            window.location.pathname = '/';
        }
    }
} 