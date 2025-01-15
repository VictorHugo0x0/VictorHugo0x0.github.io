document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.getElementById('menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    // Verificando se os elementos existem antes de adicionar o evento
    if (menuButton && mobileMenu) {
        menuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Animação de Slide para a seção
    const slideSection = document.getElementById('slide-section');
    if (slideSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    slideSection.classList.add('show');
                } else {
                    slideSection.classList.remove('show');
                }
            });
        });
        observer.observe(slideSection);
    }
});