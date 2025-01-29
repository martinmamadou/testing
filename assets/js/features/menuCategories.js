export function initMenuCategories() {
    const defaultSection = document.querySelector('.menu-item.Burger');
    if (defaultSection) {
        defaultSection.classList.add('active');
    }

    const buttons = document.querySelectorAll('.menu-btn');
    const menuItems = document.querySelectorAll('.menu-item');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const targetClass = button.getAttribute('data-target');
            
            buttons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            menuItems.forEach(item => item.classList.remove('active'));
            const targetSection = document.querySelector(`.menu-item.${targetClass}`);
            if (targetSection) {
                targetSection.classList.add('active');
            }

            document.querySelector('.menu-content').scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    });
} 