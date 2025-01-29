export function toggleFooter(event) {
    event.preventDefault();
    event.stopPropagation();
    
    const footer = document.querySelector('.main-footer');
    footer.classList.toggle('show');
} 