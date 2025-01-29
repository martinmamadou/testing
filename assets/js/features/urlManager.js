export function initUrlManager() {
    // Gérer l'URL initiale au chargement
    handleInitialUrl();

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
        targetView = path.substring(1); // Enlève le / initial
        targetView = targetView.charAt(0).toUpperCase() + targetView.slice(1).toLowerCase();
    }

    // Trouver et activer la vue correspondante
    const views = document.querySelectorAll('.view');
    const navItems = document.querySelectorAll('nav li');
    const menuSection = document.querySelector('.menu');

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
        }
    }
} 