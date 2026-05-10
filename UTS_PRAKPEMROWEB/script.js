// Navigation System
function navigateTo(pageId) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });

    // Show selected page
    const targetPage = document.getElementById('page-' + pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }

    // Update active state in nav links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active-link');
        if (link.dataset.page === pageId) {
            link.classList.add('active-link');
        }
    });

    // Close mobile menu after clicking
    document.getElementById('mobile-nav').classList.add('hidden');
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    lucide.createIcons();

    // Setup navigation clicks
    document.querySelectorAll('.nav-link[data-page]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            navigateTo(link.dataset.page);
        });
    });

    // Mobile menu toggle
    const menuBtn = document.getElementById('mobile-menu-btn');
    const mobileNav = document.getElementById('mobile-nav');
    
    menuBtn.addEventListener('click', () => {
        mobileNav.classList.toggle('hidden');
    });

    // Contact Form Handler
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const successMsg = document.getElementById('form-success');
            successMsg.classList.remove('hidden');
            contactForm.reset();
            
            setTimeout(() => {
                successMsg.classList.add('hidden');
            }, 3000);
        });
    }
});
