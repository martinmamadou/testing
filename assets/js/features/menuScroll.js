export function initMenuScroll() {
    const menuContent = document.querySelector('.menu-content');
    const menuBtnContainer = document.querySelector('.menu-btn-container');

    menuContent.addEventListener('scroll', function() {
        if (this.scrollTop > 100) {
            menuBtnContainer.classList.add('scrolled');
        } else {
            menuBtnContainer.classList.remove('scrolled');
        }
    });
} 