import { updateUrl } from './urlManager.js';

export function initNavigation() {
    const navItems = document.querySelectorAll('nav li');
    const views = document.querySelectorAll('.view');
    const menuSection = document.querySelector('.menu');

    navItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            
            navItems.forEach(nav => nav.classList.remove('active'));
            this.classList.add('active');

            views.forEach(view => view.classList.remove('active'));
            menuSection.classList.remove('show');

            const isMenu = this.querySelector('a.men');
            if (isMenu) {
                menuSection.classList.add('show');
                updateUrl('menu');
            } else {
                const targetClass = this.querySelector('a').textContent.trim();
                const targetView = document.querySelector(`.view.${targetClass}`);
                if (targetView) {
                    targetView.classList.add('active');
                    updateUrl(targetClass);
                }
            }
        });
    });
} 