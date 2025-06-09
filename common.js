// Common functions for back-to-top button
function initializeBackToTopButton(container) {
    const backToTopBtn = document.createElement('button');
    backToTopBtn.className = 'back-to-top-btn';
    backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    document.body.appendChild(backToTopBtn);

    function handleScroll() {
        if (container.scrollTop > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    }

    function scrollToTop() {
        container.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    container.addEventListener('scroll', handleScroll);
    backToTopBtn.addEventListener('click', scrollToTop);

    return backToTopBtn;
}

// Export the function
window.initializeBackToTopButton = initializeBackToTopButton; 